import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { CLIENT, ROUTE } from "@/constants";
import { clearClientData, getClientData, setClientData } from "@service/client-service";
import { NextComponentType } from "next";
import { PageProps } from "@/pages/_app";
import { useEffect, useContext } from "react";
import jwtService from "@service/jwt-service";
import { AbilityContext } from "@utils/caslAbility";
import defineAbilityFor from "@utils/permissions";

export const moveToLoginPage = (router: any) => {
  if (process.env.NEXT_PUBLIC_DEV_ENV === "local") {
    router.replace(ROUTE.LOGIN);
  } else {
    // Todo: 로그인 필요 안내 얼럿 추가? , admin 에서의 redirect 필요성
    window.location.assign(process.env.NEXT_PUBLIC_BASE_PATH + "/login");
  }
};

export const setUserData = async (queryClient: any, ability: any) => {
  const { data } = await jwtService.getUserData();
  setClientData(CLIENT.USER_DATA, () => data, queryClient);
  ability.update(defineAbilityFor(data));
};

export function withAuth(WrappedComponent: NextComponentType) {
  return function Auth(props: PageProps) {
    const router = useRouter();
    const queryClient = useQueryClient();
    const ability = useContext(AbilityContext);
    useEffect(() => {
      const auth = jwtService.getToken() !== undefined && jwtService.getToken() !== null;
      if (router && !auth) {
        clearClientData(queryClient);
        localStorage.removeItem(CLIENT.USER_DATA);
        // setClientData(CLIENT.REDIRECT, () => router.pathname, queryClient);
        localStorage.setItem(CLIENT.REDIRECT, router.pathname);
        moveToLoginPage(router);
      } else {
        if (auth && !getClientData(CLIENT.USER_DATA, queryClient)) {
          setUserData(queryClient, ability).then(() => {
            // if (getClientData(CLIENT.USER_DATA, queryClient)) {
            //   ability.update(defineAbilityFor(getClientData(CLIENT.USER_DATA, queryClient)));
            // }
          });
        }
      }
    }, [queryClient, router, ability]);
    return <WrappedComponent {...props} />;
  };
}
