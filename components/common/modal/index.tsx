import { Dialog, Transition } from "@headlessui/react";
import { Fragment, memo } from "react";

type Mode = "onlyCancel" | "onlyConfirm" | "confirm";
/*
 * Mode 비어있을때, onlyCancel > cancel 버튼만 있는 모달
 * Mode onlyConfirm > confirm 버튼만 있는 모달
 * Mode confirm > cancel, confirm 버튼 둘다 존재하는 모달
 */

export interface Props {
  className?: string;
  open: boolean;
  customSize?: string;
  fullSize?: boolean;
  cancleButtonText?: string;
  confirmButtonText?: string;

  onClose(value: boolean): void;
  children: any;
  closeText?: string;
  mode?: Mode;
}

const Index = ({
  open,
  onClose,
  children,
  customSize,
  fullSize,
  mode = "confirm",
  cancleButtonText = "취소",
  confirmButtonText = "확인",
}: Props) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" static open={open} onClose={_ => onClose(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="overflow-y-auto fixed inset-0">
          <div className="flex justify-center items-center p-4 h-full text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`flex flex-col overflow-hidden ${
                  customSize ? customSize : fullSize ? "w-full h-full" : "w-full max-w-md"
                } text-left align-middle bg-white rounded-lg shadow-xl transition-all`}
              >
                <div className="grow p-6 max-w-full ltr:text-left rtl:text-right align-middle transition-all min-w-content">
                  {children}
                </div>
                <div className="flex justify-center py-3 px-4 bg-gray-50">
                  {mode !== "onlyConfirm" ? (
                    <button
                      type="button"
                      className="p-2 w-40 text-base font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-sm"
                      onClick={_ => onClose(false)}
                    >
                      {cancleButtonText}
                    </button>
                  ) : null}
                  {mode === "confirm" || mode === "onlyConfirm" ? (
                    <button
                      type="button"
                      className="p-2 ml-2 w-40 text-base font-medium text-white bg-primary hover:bg-green-500 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-sm"
                      onClick={_ => onClose(true)}
                    >
                      {confirmButtonText}
                    </button>
                  ) : null}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default memo(Index);
