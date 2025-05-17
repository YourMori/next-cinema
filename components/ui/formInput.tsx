import React, { InputHTMLAttributes, forwardRef } from "react";

export const FormInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ type, placeholder, value, onChange, required, className, autoComplete, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`px-4 py-2 bg-primary border-border text-textPrimary placeholder-text-secondaryLight h-9 w-full ` + (className ?? "")}
        autoComplete={autoComplete}
        {...props}
      />
    );
  }
);

FormInput.displayName = "FormInput";
