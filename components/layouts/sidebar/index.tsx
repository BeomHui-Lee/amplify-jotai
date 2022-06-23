import React, { memo, useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import CheckBoxIcon from "@components/icons/checkBox-icon";
import DropdownIcon from "@components/icons/dropdown-icon";
import { ROUTE } from "@constants/route";
import { AUTH } from "@constants/common";
import { AbilityContext } from "@utils/caslAbility";
import { useAbility } from "@casl/react";

type Sidebar = {
  sidebarUse: boolean;
  sidebarOpen: boolean;
  ability?: any;
};

type MenuGroup = {
  title: string;
  route: Array<Route>;
};

interface Route extends RouteField {
  children: Array<RouteField>;
}

type RouteField = {
  label: string;
  icon: JSX.Element;
  link: string;
  auth?: string;
};

const menuGroup: Array<MenuGroup> = [
  {
    title: "",
    route: [{ label: "대시보드", link: ROUTE.DASHBOARD, icon: null, auth: AUTH.DASHBOARD, children: [] }],
  },
  {
    title: "농업 계획 서비스",
    route: [
      {
        label: "인바운드 DB관리",
        link: "",
        icon: null,
        auth: AUTH.INBOUND_DB,
        children: [
          {
            label: "간편견적 인바운드 DB",
            icon: <CheckBoxIcon />,
            link: ROUTE.HCOST_LIST,
            auth: AUTH.HCOST_INBOUND_DB,
          },
          {
            label: "수익성 인바운드 DB",
            icon: <CheckBoxIcon />,
            link: ROUTE.STARTUP_LIST,
            auth: AUTH.STARTUP_INBOUND_DB,
          },
        ],
      },
      {
        label: "간편견적 관리",
        link: "",
        icon: null,
        auth: AUTH.HCOST,
        children: [
          {
            label: "간편견적 모델 관리",
            icon: <CheckBoxIcon />,
            link: ROUTE.HCOST_MODEL_LIST,
            auth: AUTH.HCOST_MODEL,
          },
          {
            label: "간편견적 요소 관리",
            icon: <CheckBoxIcon />,
            link: ROUTE.HCOST_FACTOR_LIST,
            auth: AUTH.HCOST_FACTOR,
          },
        ],
      },
      {
        label: "수익성 관리",
        link: "",
        icon: null,
        auth: AUTH.STARTUP,
        children: [
          {
            label: "수익성 등록 (관리자)",
            icon: <CheckBoxIcon />,
            link: ROUTE.STARTUP_CREATE,
            auth: AUTH.STARTUP_CREATE,
          },
          {
            label: "수익성 모델 관리",
            icon: <CheckBoxIcon />,
            link: ROUTE.STARTUP_MODEL_LIST,
            auth: AUTH.STARTUP_MODEL,
          },
          {
            label: "수익성 요소 관리",
            icon: <CheckBoxIcon />,
            link: ROUTE.STARTUP_FACTOR_LIST,
            auth: AUTH.STARTUP_FACTOR,
          },
          {
            label: "모델수정페이지(임시)",
            icon: <CheckBoxIcon />,
            link: ROUTE.STARTUP_MODEL_MODIFY,
            auth: AUTH.STARTUP_FACTOR,
          },
        ],
      },
    ],
  },
];

const Sidebar = ({ sidebarUse, sidebarOpen, ability }: Sidebar) => {
  const [collapseMenu, setCollapseMenu] = useState(""); // 아코디언 펼칠 메뉴
  const [selectedMenu, setSelectedMenu] = useState(""); // 실제 라우트경로와 일치하는 선택한 메뉴
  const router = useRouter();
  // const ability = useAbility(AbilityContext);
  // const ability = useContext(AbilityContext);

  useEffect(() => {
    menuGroup.map((group: any, groupIndex: number) => {
      // 라우트 그룹에 벗어나는 메뉴를 위한 초기화
      setSelectedMenu("");
      setCollapseMenu("");
      group.route.map((menu: any, index: number) => {
        const menuID = groupIndex.toString() + index.toString();
        if (menu.children.length > 0) {
          menu.children.map((subMenu: any, index: number) => {
            if (router.pathname === subMenu.link) {
              setSelectedMenu(menuID);
              setCollapseMenu(menuID);
            }
          });
        } else {
          if (router.pathname === menu.link) {
            setSelectedMenu(menuID);
            setCollapseMenu(menuID);
          }
        }
      });
    });
  }, [router]);

  const onClickAccordion = (value: string) => {
    if (collapseMenu === value) {
      setCollapseMenu("");
    } else {
      setCollapseMenu(value);
    }
  };

  return (
    <div className={`fixed h-screen z-100 ${sidebarUse ? (sidebarOpen ? "" : "") : "hidden"}`}>
      <div className="w-60 h-full bg-white border-r" id="sidenavSecExample">
        <div className="px-6 pt-4 pb-2 mb-10">
          <Link href={ROUTE.DASHBOARD}>
            <a>
              <div className="flex items-center">
                <div className="shrink-0">
                  <CheckBoxIcon />
                </div>
                <div className="grow ml-3">
                  <p className="text-xl font-semibold text-primary">자재 플랫폼</p>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {menuGroup.map((group: any, groupIndex: number) => {
          return (
            <div key={groupIndex}>
              {/*<hr className="my-2" />*/}
              <div className="px-6 my-4 text-xs text-gray-600">{group.title}</div>
              <ul className="relative px-1 mb-10">
                {group.route.map((menu: any, index: number) => {
                  const menuID = groupIndex.toString() + index.toString();
                  if (ability.can("read", menu.auth)) {
                    return (
                      <li className="relative mb-2" key={index}>
                        <Link href={menu.link}>
                          {menu.children.length > 0 ? (
                            <>
                              <a
                                className={`flex overflow-hidden items-center py-4 px-6 h-12 text-sm text-ellipsis whitespace-nowrap rounded transition duration-300 ease-in-out cursor-pointer text-gray-700 ${
                                  collapseMenu === menuID
                                    ? "bg-green-50 hover:bg-green-100"
                                    : "bg-white hover:bg-green-50"
                                }`}
                                data-bs-toggle="collapse"
                                data-bs-target={"#target" + menuID}
                                aria-expanded="false"
                                aria-controls={"target" + menuID}
                                onClick={() => {
                                  onClickAccordion(menuID);
                                }}
                              >
                                {menu.icon}
                                <span className="text-base">{menu.label}</span>
                                <DropdownIcon addClass={`${collapseMenu === menuID ? "rotate-180" : ""}`} />
                              </a>
                              <ul
                                className={`relative accordion-collapse ${
                                  selectedMenu === menuID ? "collapse show" : "collapse"
                                }`}
                                id={"target" + menuID}
                                aria-labelledby="sidenavSecEx2"
                                data-bs-parent="#sidenavSecExample"
                              >
                                {menu.children.map((subMenu: any, index: number) => {
                                  return (
                                    ability.can("read", subMenu.auth) && (
                                      <li className="relative" key={index}>
                                        <Link href={subMenu.link}>
                                          <a
                                            className={`flex overflow-hidden items-center py-5 pr-6 pl-10 h-6 text-sm text-ellipsis whitespace-nowrap rounded transition duration-300 ease-in-out ${
                                              router.pathname === subMenu.link
                                                ? "bg-primary text-white hover:bg-green-500"
                                                : "text-gray-700 hover:bg-green-50"
                                            }`}
                                          >
                                            {subMenu.icon}
                                            <span className="pl-2">{subMenu.label}</span>
                                          </a>
                                        </Link>
                                      </li>
                                    )
                                  );
                                })}
                              </ul>
                            </>
                          ) : (
                            <a
                              className={`flex overflow-hidden items-center py-4 px-6 h-12 text-sm text-ellipsis whitespace-nowrap rounded transition duration-300 ease-in-out cursor-pointer ${
                                router.pathname === menu.link
                                  ? "bg-primary text-white hover:bg-green-500"
                                  : "text-gray-700 hover:bg-green-50"
                              }`}
                            >
                              {menu.icon}
                              <span className="text-base">{menu.label}</span>
                            </a>
                          )}
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          );
        })}
        <div className="absolute bottom-0 w-full text-center">
          <hr className="m-0" />
          <p className="py-2 text-sm text-gray-700">tailwind-elements.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
