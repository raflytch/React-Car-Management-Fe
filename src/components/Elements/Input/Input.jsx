import { forwardRef } from "react";

const Input = forwardRef(
  ({ type, id, name, placeholder, value, onChange }, ref) => {
    return (
      <>
        <input
          ref={ref}
          type={type}
          id={id}
          name={name}
          className="w-full rounded-lg border border-gray-200 p-4 mt-2 pe-12 text-sm shadow-sm"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </>
    );
  }
);

export default Input;
