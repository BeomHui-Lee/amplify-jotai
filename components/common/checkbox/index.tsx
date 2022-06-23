import React, { InputHTMLAttributes, memo, useId } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  name: string;
  error?: string;
}

const Index = React.forwardRef<HTMLInputElement, Props>(
  ({ className = "", label, name, value, error, ...rest }, ref) => {
    const id = useId();
    return (
      <div className={`form-check ${className}`}>
        <div>
          <input
            id={id}
            name={name}
            value={value}
            type="checkbox"
            ref={ref}
            className="float-left mt-px mr-3 w-6 h-6 align-top bg-white checked:bg-primary bg-center bg-no-repeat bg-contain rounded-sm border border-gray-300 checked:border-primary focus:outline-none transition duration-200 appearance-none cursor-pointer form-check-input"
            {...rest}
          />

          <label
            htmlFor={id}
            className="inline-block text-base text-gray-800 cursor-pointer text-body form-check-label"
          >
            {label}
          </label>
        </div>

        {error && <p className="px-2 my-1 text-sm text-red-500 bg-red-100 rounded text-end">{error}</p>}
      </div>
    );
  },
);
Index.displayName = "Checkbox";

export default memo(Index);

export function makeCheckBoxes(register: any, name: string, labels: string[], values: number[]) {
  const ROW_LIMIT = 3;
  const lineLength = Math.floor((labels.length - 1) / ROW_LIMIT) + 1;
  return new Array(lineLength).fill(null).map((_, i) => {
    const index = ROW_LIMIT * i;
    return (
      <div className={`flex mb-${i === ROW_LIMIT ? 6 : 1}`} key={i}>
        {new Array(3).fill(null).map((_, i) => {
          if (labels[index + i]) {
            return (
              <Index
                className="basis-40 mr-5"
                key={index + i}
                label={labels[index + i]}
                value={values[index + i]}
                {...register(name)}
              ></Index>
            );
          }
          return null;
        })}
      </div>
    );
  });
}
