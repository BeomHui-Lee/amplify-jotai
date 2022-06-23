import { forwardRef } from "react";
import { memo } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  name?: string;
  label?: string;
  className?: string;
  multiple?: boolean;
  accept?: string;
  error?: string;
}

const FileInput = forwardRef<HTMLInputElement, Props & UseFormRegisterReturn>(
  ({ className = "", label, name, multiple, onChange, onBlur, accept, error }, ref) => {
    return (
      <div className={className}>
        {label && (
          <label htmlFor={name} className="block mb-3 text-sm font-semibold leading-none form-label text-body-dark">
            {label}
          </label>
        )}
        <input
          className="block py-1.5 px-3 m-0 w-full text-base font-normal text-gray-700 focus:text-gray-700 bg-clip-padding bg-white focus:bg-white rounded border border-gray-300 focus:border-primary border-solid focus:outline-none focus:ring-0 active:ring-0 transition ease-in-out form-control"
          type="file"
          id={name}
          ref={ref}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          multiple={multiple}
          accept={accept}
        />
        {error && <p className="px-2 my-1 text-xs text-red-500 bg-red-200 rounded text-start">{error}</p>}
      </div>
    );
  },
);

FileInput.displayName = "FileInput";

export default memo(FileInput);
