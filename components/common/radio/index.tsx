import React, { InputHTMLAttributes, memo, useId } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  labelKey?: string;
  name: string;
  error?: string;
}

const Index = React.forwardRef<HTMLInputElement, Props>(
  ({ className = "", label, labelKey, name, value, error, ...rest }, ref) => {
    const id = useId();
    return (
      <div className={`form-check ${className}`}>
        <div>
          <input
            id={id}
            name={name}
            type="radio"
            ref={ref}
            value={value}
            className="float-left mt-1 mr-2 w-4 h-4 align-top bg-white checked:bg-primary bg-center bg-no-repeat bg-contain rounded-full border border-gray-300 checked:border-primary focus:outline-none transition duration-200 appearance-none cursor-pointer form-check-input"
            {...rest}
          />

          <label
            htmlFor={id}
            className="inline-block text-base text-gray-800 cursor-pointer text-body form-check-label"
          >
            {labelKey || label!}
          </label>
        </div>

        {error && <p className="px-2 my-1 text-sm text-red-500 bg-red-100 rounded text-start">{error}</p>}
      </div>
    );
  },
);
Index.displayName = "Radio";

export default memo(Index);
