import React, { HTMLAttributes, memo } from "react";

export interface Props {
  className?: string;
}

const Chips = ({ className = "", children }: Props & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={`px-2 py-0 absolute cursor-default rounded-full text-white bg-red-400 font-semibold text-xs inline-flex items-center align-center w-max cursor-pointer ${className}`}
    >
      {children}
    </span>
  );
};

export default memo(Chips);
