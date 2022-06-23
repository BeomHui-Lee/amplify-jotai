import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Sidebar from "@components/layouts/sidebar";
import Navbar from "@components/layouts/navbar";
import { Ability } from "@casl/ability";
import defineAbilityFor from "@utils/permissions";
import { AbilityContext, initialAbility } from "@utils/caslAbility";
import { useAbility } from "@casl/react";
import { clearClientData, getClientData } from "@service/client-service";
import { CLIENT } from "@constants/client";
import { useQueryClient } from "react-query";
import { moveToLoginPage } from "@feature/auth";
import jwtService from "@service/jwt-service";
import {ROUTE} from "@/constants";

type Layouts = {
  children: JSX.Element;
};

const Layouts = ({ children }: Layouts) => {
  const router = useRouter();
  const [sidebarUse, setSidebarUse] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [testUserData, setTestUserData] = useState({
    // 권한 테스트용 유저 데이터
    // Todo: 디폴트 유저 정보 api로 가져오기
    roles: [{ rolename: "운영자" }],
  });
  const queryClient = useQueryClient();
  // const ability = new Ability(defineAbilityFor(getClientData(CLIENT.USER_DATA, queryClient)));
  // const ability = useContext(AbilityContext);
  const ability = useAbility(AbilityContext);

  useEffect(() => {
    // 업체가입 페이지에서는 사이드바 미사용
    if (router.pathname === "/signup" || router.pathname === "/login") {
      setSidebarUse(false);
    } else {
      setSidebarUse(true);
    }

    if (router.pathname === "/"){
      router.replace(ROUTE.DASHBOARD);
    }
  }, [router]);

  const logout = () => {
    clearClientData(queryClient);
    jwtService.removeToken();
    jwtService.removeRefreshToken();
    ability.update(initialAbility);
    moveToLoginPage(router);
  };

  const navbarClick = (value: string, type: string) => {
    if (type === "dropdown") {
      switch (value) {
        case "logout":
          logout();
          break;
        default:
          break;
      }
    } else {
      switch (value) {
        case "0":
          setTestUserData({ roles: [{ rolename: "관리자(유통/시공사)" }] });
          break;
        case "1":
          setTestUserData({ roles: [{ rolename: "운영자" }] });
          break;
        default:
          setTestUserData({ roles: [{ rolename: "운영자" }] });
          break;
      }
    }
    // setTestUserData({ roles: [{ rolename: "운영자" }] });
    // testUserData = { roles: [{ rolename: "운영자" }] };
    // ability.update(defineAbilityFor({ roles: [{ rolename: "운영자" }] }));
  };

  return (
    <>
      <Sidebar sidebarUse={sidebarUse} sidebarOpen={sidebarOpen} ability={ability} />
      {/*<Sidebar sidebarUse={sidebarUse} sidebarOpen={sidebarOpen} />*/}
      <Navbar sidebarUse={sidebarUse} sidebarOpen={sidebarOpen} callbacks={navbarClick} />
      <div className={sidebarUse ? (sidebarOpen ? "ml-60" : "") : ""}>{children}</div>
      {/*footer*/}
    </>
  );
};

export default Layouts;
