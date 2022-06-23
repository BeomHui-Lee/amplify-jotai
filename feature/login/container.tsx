import React, { ComponentType, useCallback, useEffect, useState, useContext } from "react";
import { useQueryClient } from "react-query";
import { useRouter } from "next/router";
import { login } from "@service/auth-service";
import { getClientData, removeClientData, setClientData } from "@service/client-service";
import { CLIENT, ROUTE } from "@/constants";
import { PageProps } from "@/pages/_app";
import jwtService from "@service/jwt-service";
import { setUserData } from "@feature/auth";
import { AbilityContext } from "@utils/caslAbility";

export type Props = { login: () => Promise<void> };

export function withContainer(WrappedComponent: ComponentType<Props>) {
  return function Login(_: PageProps) {
    const queryClient = useQueryClient();
    const router = useRouter();
    const ability = useContext(AbilityContext);

    useEffect(() => {
      const accessToken =
        router.asPath.indexOf("accessToken") > -1
          ? router.asPath.split("accessToken=")[1].split("&refreshToken=")[0]
          : undefined;
      const refreshToken =
        router.asPath.indexOf("accessToken") > -1
          ? router.asPath.split("accessToken=")[1].split("&refreshToken=")[1]
          : undefined;
      if (accessToken && refreshToken) {
        jwtService.setToken(accessToken);
        jwtService.setRefreshToken(refreshToken);

        // Todo: 구글 로그인 페이지를 별도로 둘지 고려 > 리다이렉트때 라우터 변경에 따른 중복 호출로 인해 임시로 플래그 처리
        // if (googleLoginFlag) {
        //   setUserData().then(() => {
        //     const redirect = localStorage.getItem(CLIENT.REDIRECT);
        //     if (redirect) {
        //       router.replace(redirect);
        //     } else {
        //       router.replace(ROUTE.HOME);
        //     }
        //   });
        // }

        setUserData(queryClient, ability).then(() => {
          const redirect = localStorage.getItem(CLIENT.REDIRECT);
          if (redirect) {
            router.replace(redirect);
          } else {
            router.replace(ROUTE.DASHBOARD);
          }
        });
      }
    }, []);

    // const setUserData = async () => {
    //   if (googleLoginFlag) {
    //     googleLoginFlag = false;
    //     const { data } = await jwtService.getUserData();
    //     setClientData(CLIENT.USER_DATA, () => data, queryClient);
    //     googleLoginFlag = true;
    //     // ability.update(defineAbilityFor(userData));
    //   }
    // };

    const loginAction = useCallback(async () => {
      // const res = await login();
      // setClientData(CLIENT.AUTH, () => res, queryClient);

      // 임시 구글 로그인
      location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/oauth2/authorization/google?redirect_uri=${location.protocol}//${location.host}/login`;
    }, [queryClient, router]);

    const passProps = {
      login: loginAction,
    };

    return <WrappedComponent {...passProps} />;
  };
}
