import React, { memo } from "react";
import Link from "next/link";
import { useQueryClient } from "react-query";
import UserCircleIcon from "@components/icons/userCircle-icon";
import { getClientData } from "@service/client-service";
import { CLIENT } from "@constants/client";

type Navbar = {
  sidebarUse: boolean;
  sidebarOpen: boolean;
  callbacks: Function;
};

const Navbar = ({ sidebarUse, sidebarOpen, callbacks }: Navbar) => {
  const queryClient = useQueryClient();
  const navbarDefaultClass =
    "flex relative flex-wrap justify-between items-center py-4 ml-60 w-[calc(100vw_-_15rem)] text-gray-700 border-b border-gray-100 navbar navbar-expand-lg navbar-light ";
  let userName: string = "";
  if (getClientData(CLIENT.USER_DATA, queryClient)) {
    const { name } = getClientData(CLIENT.USER_DATA, queryClient);
    userName = name;
  }
  return (
    <nav className={`${navbarDefaultClass}${sidebarUse ? "" : "hidden"}`}>
      <div className="flex flex-wrap justify-between items-center px-6 w-full container-fluid">
        <div className="flex justify-center">
          <div>
            <div className="mb-7 form-check form-switch">
              <input
                className="float-left -ml-10 w-9 h-5 align-top bg-gray-300 bg-no-repeat bg-contain rounded-full focus:outline-none shadow-sm appearance-none cursor-pointer form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault56"
              />
            </div>
          </div>
        </div>
        {/*<div className="grow items-center collapse navbar-collapse" id="navbarSupportedContent">*/}
        {/*  <ul className="flex flex-col pl-0 mr-auto navbar-nav list-style-none">*/}
        {/*    <li className="p-2 nav-item">*/}
        {/*      <div*/}
        {/*        className="p-0 text-gray-500 hover:text-gray-700 focus:text-gray-700 cursor-pointer nav-link"*/}
        {/*        onClick={() => {*/}
        {/*          callbacks("0");*/}
        {/*        }}*/}
        {/*      >*/}
        {/*        권한 변경 테스트1*/}
        {/*      </div>*/}
        {/*    </li>*/}
        {/*    <li className="p-2 nav-item">*/}
        {/*      <div*/}
        {/*        className="p-0 text-gray-500 hover:text-gray-700 focus:text-gray-700 cursor-pointer nav-link"*/}
        {/*        onClick={() => {*/}
        {/*          callbacks("1");*/}
        {/*        }}*/}
        {/*      >*/}
        {/*        권한 변경 테스트2*/}
        {/*      </div>*/}
        {/*    </li>*/}
        {/*    <li className="p-2 nav-item">*/}
        {/*      <a className="p-0 text-gray-500 hover:text-gray-700 focus:text-gray-700 nav-link" href="#">*/}
        {/*        테스트3*/}
        {/*      </a>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</div>*/}
        <div className="flex relative items-center">
          <span className="mr-4 text-sm">{userName && userName + " 님"}</span>
          <div className="relative dropdown">
            <a
              className="flex items-center dropdown-toggle hidden-arrow"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <UserCircleIcon />
            </a>
            <ul
              className="hidden float-left absolute right-0 left-auto z-50 py-2 m-0 mt-1 min-w-max text-base list-none text-left bg-clip-padding bg-white rounded-lg border-none shadow-lg dropdown-menu"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <a
                  className="block py-2 px-4 w-full text-sm font-normal text-gray-700 whitespace-nowrap bg-transparent hover:bg-gray-100 dropdown-item"
                  href="#"
                >
                  프로필
                </a>
              </li>
              <li>
                <a
                  className="block py-2 px-4 w-full text-sm font-normal text-gray-700 whitespace-nowrap bg-transparent hover:bg-gray-100 dropdown-item"
                  href="#"
                >
                  요금제
                </a>
              </li>
              <li>
                <button
                  className="block py-2 px-4 w-full text-sm font-normal text-gray-700 whitespace-nowrap bg-transparent hover:bg-gray-100 dropdown-item"
                  onClick={() => {
                    callbacks("logout", "dropdown");
                  }}
                >
                  로그아웃
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
