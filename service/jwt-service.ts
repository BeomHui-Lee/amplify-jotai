// import notify from "devextreme/ui/notify";
import axios, { AxiosInstance } from "axios";
import { AUTH } from "@constants/common";

/**
 * Jwt를 사용한 axios 통신 클래스
 * 공통적인 Jwt 토큰처리
 */

class JwtService {
  // Will be used by this service for making API calls
  axiosIns: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });

  // jwtConfig <= Will be used by this service
  jwtConfig = {
    tokenType: "Bearer",
    refreshEndpoint: "/auth/refreshtoken",

    // Value of this property will be used as key to store JWT token in storage
    storageTokenKeyName: AUTH.ACCESS_TOKEN,
    storageRefreshTokenKeyName: AUTH.REFRESH_TOKEN,
  };

  // For Refreshing Token
  isAlreadyFetchingAccessToken = false;

  // For Refreshing Token
  subscribers: Array<Function> = [];

  constructor() {
    // Request Interceptor
    this.axiosIns.interceptors.request.use(
      config => {
        // Get token from localStorage
        const accessToken = this.getToken();
        const refreshToken = this.getRefreshToken();

        // If token is present add it to request's Authorization Header
        if (accessToken && accessToken !== "null" && refreshToken && refreshToken !== "null") {
          // eslint-disable-next-line no-param-reassign
          config.headers = {
            ...config.headers,
            Authorization: `${this.jwtConfig.tokenType} ${accessToken}`,
          };
        } else {
          // localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName);
          // localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName);

          // Remove userData from cookies
          this.removeToken();

          // Reset ability

          // Redirect to login page
          // this.router.push("/login"); // 같은 페이지로 재이동 할때 오류 캐치
        }
        return config;
      },
      error => Promise.reject(error),
    );

    // Add request/response interceptor
    this.axiosIns.interceptors.response.use(
      response => response,
      error => {
        // const { config, response: { status } } = error
        const { config, response } = error;
        const originalRequest = config;
        // if (status === 401) {
        if (response && response.status === 401 && response.data.code === "JWT-E100") {
          if (!this.isAlreadyFetchingAccessToken) {
            this.isAlreadyFetchingAccessToken = true;
            this.refreshToken()
              .then(r => {
                this.isAlreadyFetchingAccessToken = false;

                // Update accessToken in localStorage
                this.setToken(r.data.accessToken);
                this.setRefreshToken(r.data.refreshToken);

                this.onAccessTokenFetched(r.data.accessToken);
              })
              .catch(e => {
                // notify("인증정보 갱신에 실패하였습니다!!!");

                // this.router.push("/login"); // 같은 페이지로 재이동 할때 오류 캐치
              });
          }
          return new Promise(resolve => {
            this.addSubscriber((accessToken: string) => {
              // Make sure to assign accessToken according to your response.
              // Check: https://pixinvent.ticksy.com/ticket/2413870
              // Change Authorization header
              originalRequest.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
              resolve(this.axiosIns(originalRequest));
            });
          });
          // return Promise.reject(error);
        }
        if (response && response.status === 401 && response.data.code === "COMMON-E403") {
          // localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName);
          // localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName);

          // notify("유효하지 않은 인증정보로 접근하셨습니다!!!");

          // Reset ability
          // Redirect to login page
          // this.router.push("/login");
        } else if (response && response.status === 403 && response.data.code === "COMMON-E402") {
          // notify(response.data.message, "error");
        } else if (response && response.status === 404 && response.data.code === "COMMON-E404") {
          // notify("존재하지 않는 URL입니다", "error");
        } else if (response && response.status === 400 && response.data.code === "COMMON-E405") {
          // notify("결과가 존재하지 않습니다", "error");
        } else if (response && response.status === 500 && response.data.code === "COMMON-E500") {
          // notify("알 수 없는 오류가 발생하였습니다", "error");
        }
        return Promise.reject(error);
      },
    );
  }

  //----------------------------------
  // 인증
  //----------------------------------

  onAccessTokenFetched(accessToken: string) {
    this.subscribers = this.subscribers.filter((callback: Function) => callback(accessToken));
  }

  addSubscriber(callback: Function) {
    this.subscribers.push(callback);
  }

  getUserData() {
    return this.axiosIns.get("/user/auth");
  }

  getToken() {
    return localStorage.getItem(this.jwtConfig.storageTokenKeyName);
  }

  getRefreshToken() {
    return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName);
  }

  setToken(value: string) {
    localStorage.setItem(this.jwtConfig.storageTokenKeyName, value);
  }

  setRefreshToken(value: string) {
    localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName, value);
  }

  removeToken() {
    localStorage.removeItem(this.jwtConfig.storageTokenKeyName);
  }

  removeRefreshToken() {
    localStorage.removeItem(this.jwtConfig.storageRefreshTokenKeyName);
  }

  // 토큰 재발급
  refreshToken() {
    // const { username } = store.state.store.userData;
    const refreshToken = this.getRefreshToken();
    // console.log(username);
    // console.log(refreshToken);
    return this.axiosIns.post(this.jwtConfig.refreshEndpoint, {
      // username,
      refreshToken,
    });
  }
}

export default new JwtService();
