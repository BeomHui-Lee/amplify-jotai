import React, { useContext } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { AbilityContext, initialAbility } from "@utils/caslAbility";
import { Ability } from "@casl/ability";
import Layouts from "@components/layouts";
import "../styles/globals.css";

if (typeof window !== "undefined") {
  // @ts-ignore - @types/tw-elements가 현재 없습니다.
  import("tw-elements");
}

export type PageProps = {};

const queryClient = new QueryClient({
  defaultOptions: {
    // 의도치 않은 fetch 발생으로 인하여 서버 요청 부하를 줄이기 위한 설정
    queries: {
      staleTime: 100,
      refetchOnWindowFocus: false,
    },
  },
});

const ability = new Ability(initialAbility);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AbilityContext.Provider value={ability}>
          <Layouts>
            <Component className="dx-viewport" {...pageProps} />
          </Layouts>
        </AbilityContext.Provider>
        <ToastContainer autoClose={2000} theme="colored" />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
