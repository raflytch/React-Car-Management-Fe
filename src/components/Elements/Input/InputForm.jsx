import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef(
  ({ label, type, id, name, placeholder, value, onChange }, ref) => {
    return (
      <>
        <div className="mb-6">
          <Label htmlFor="inputForm">{label}</Label>
          <Input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            ref={ref}
            value={value}
            onChange={onChange}
          />
        </div>
      </>
    );
  }
);

export default InputForm;
