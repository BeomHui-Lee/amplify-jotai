import Head from "next/head";
import Image from "next/image";
import { memo } from "react";
import { withContainer, Props } from "./container";
import Button from "@components/common/button";

function LoginPresenter({ login }: Props) {
  return (
    <>
      <Head>
        <title>브이하우스 - 로그인</title>
      </Head>
      <div>
        <section className="h-screen">
          <div className="container py-12 px-6 h-full">
            <div className="flex flex-wrap justify-center items-center h-full text-gray-800 g-6">
              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">이미지 영역</div>
              <div className="md:w-8/12 lg:ml-20 lg:w-5/12">
                <form>
                  <div className="mb-6">
                    <input
                      type="text"
                      className="block py-2 px-4 m-0 w-full text-xl font-normal text-gray-700 focus:text-gray-700 bg-clip-padding bg-white focus:bg-white rounded border border-gray-300 focus:border-blue-600 border-solid focus:outline-none transition ease-in-out form-control"
                      placeholder="Email address"
                    />
                  </div>

                  <div className="mb-6">
                    <input
                      type="password"
                      className="block py-2 px-4 m-0 w-full text-xl font-normal text-gray-700 focus:text-gray-700 bg-clip-padding bg-white focus:bg-white rounded border border-gray-300 focus:border-blue-600 border-solid focus:outline-none transition ease-in-out form-control"
                      placeholder="Password"
                    />
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="float-left mt-1 mr-2 w-4 h-4 align-top bg-white checked:bg-blue-600 bg-center bg-no-repeat bg-contain rounded-sm border border-gray-300 checked:border-blue-600 focus:outline-none transition duration-200 appearance-none cursor-pointer form-check-input"
                        id="exampleCheck3"
                        checked
                        onChange={() => {}}
                      />
                      <label className="inline-block text-gray-800 form-check-label" htmlFor="exampleCheck2">
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#!"
                      className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-200 ease-in-out"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="inline-block py-3 px-7 w-full text-sm font-medium leading-snug text-white uppercase bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 rounded focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    disabled={true}
                  >
                    로그인
                  </button>

                  <div className="flex before:flex-1 after:flex-1 items-center my-4 before:mt-0.5 after:mt-0.5 before:border-t after:border-t before:border-gray-300 after:border-gray-300">
                    <p className="mx-4 mb-0 font-semibold text-center">OR</p>
                  </div>
                  <Button
                    className="inline-block py-3 px-7 w-full text-sm font-medium leading-snug text-gray-800 uppercase bg-white hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-500 rounded focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => login()}
                  >
                    구글 계정으로 로그인
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default withContainer(memo(LoginPresenter));
