import { Props, withContainer } from "./container";
import Head from "next/head";
import { memo, useId, useState } from "react";
import { withAuth } from "@feature/auth";
import Button from "@components/common/button";

function DashboardPresenter(_: Props) {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function callback(val: boolean) {
    setIsOpen(val);
  }

  function onChangeRegion(nodes: string[]) {
    console.log(nodes);
  }

  return (
    <>
      {/*<Head>*/}
      {/*  <title>브이하우스</title>*/}
      {/*</Head>*/}
      {/*<main className={"flex justify-center items-center"}>대시보드</main>*/}
      {/*<Form className="m-auto mt-3 w-1/2" onSubmit={(data: any) => console.log(data)}>*/}
      {/*  {({ register, formState: { errors } }) => <>대시보드</>}*/}
      {/*</Form>*/}
      <Head>
        <title>Amplify Forum by dyson</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐕</text></svg>"
        />
      </Head>

      <div className="container mx-auto">
        <main className="bg-white">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Amplify Forum
              </p>
              <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500">
                Welcome to Amplify Forum
                Hi, There!, I am dyson.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default withAuth(withContainer(memo(DashboardPresenter)));
