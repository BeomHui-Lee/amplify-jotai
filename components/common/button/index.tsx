import { ButtonHTMLAttributes, memo, MouseEventHandler, PropsWithChildren } from "react";
import { useContainerHook } from "./_hook";

interface Props {
  className?: string;
  onClick?: MouseEventHandler;
  color?: "blue" | "gray";
}

const Index = ({
  children,
  className = "",
  onClick,
  type = "button",
  color = "blue",
  disabled = false,
}: PropsWithChildren<Props> & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { onClickHandler } = useContainerHook();
  let classname: string;
  if (color === "gray") {
    classname = `inline-block py-2.5 px-6 text-xs font-medium leading-tight text-gray-50 bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 active:bg-gray-500 rounded focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${className}`;
  } else {
    classname = `inline-block py-2.5 px-6 text-xs font-medium leading-tight text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 rounded focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${className}`;
  }
  return (
    <button type={type} disabled={disabled} className={classname} onClick={onClick ?? onClickHandler}>
      {children}
    </button>
  );
};

export default memo(Index);
