import cn from "classnames";
import React, { InputHTMLAttributes, memo } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  label?: string;
  note?: string;
  // name: string;/
  error?: string;
  type?: string;
  shadow?: boolean;
  variant?: "normal" | "solid" | "outline";
  dimension?: "small" | "medium" | "big";
}
const classes = {
  root: "h-12 flex items-center w-full rounded block py-1.5 px-3 m-0 w-full text-base font-normal text-gray-700 text-heading text-sm appearance-none focus:outline-none focus:ring-0 focus:text-gray-700 bg-clip-padding bg-white focus:bg-white border border-gray-300 focus:border-primary border-solid focus:outline-none transition duration-300 ease-in-out form-control",
  normal: "border border-border-base focus:shadow focus:bg-light focus:border-accent",
};
const sizeClasses = {
  small: "text-sm h-8",
  medium: "h-10",
  big: "h-12",
};

const Index = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      label,
      note,
      name,
      error,
      children,
      dimension = "medium",
      shadow = false,
      type = "text",
      inputClassName,
      placeholder,
      ...rest
    },
    ref,
  ) => {
    const rootClassName = cn(classes.root, sizeClasses[dimension], inputClassName);

    return (
      <div className={className}>
        {label && (
          <label htmlFor={name} className="block mb-3 text-sm font-semibold leading-none form-label text-body-dark">
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          ref={ref}
          // className={`${rootClassName} ${error ? "border border-solid border-red-500 focus:border-red-500" : ""}`}
          className={rootClassName}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          placeholder={placeholder}
          aria-invalid={error ? "true" : "false"}
          {...rest}
        />
        {note && <p className="mt-2 text-xs text-gray-500">{note}</p>}
        {error && <p className="px-2 my-1 text-sm text-red-500 bg-red-100 rounded text-start">{error}</p>}
      </div>
    );
  },
);
Index.displayName = "Input";

export default memo(Index);
