"use client";

import { Select } from "antd";
import { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";

export type SelectOption = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  options: SelectOption[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOption | null;
  required?: boolean;
  disabled?: boolean;
  handleChange?: (el: string) => void;
};

const FormSelectField = ({
  name,
  size = "large",
  value,
  placeholder = "select",
  options,
  label,
  defaultValue,
  disabled,
  required,
  handleChange,
}: SelectFieldProps) => {
  const { control, setValue } = useFormContext();

  useEffect(() => {
    if (!!defaultValue) {
      setValue(name, defaultValue.value);
    }
  }, [name, defaultValue, setValue]);

  return (
    <>
      {required ? (
        <span
          style={{
            color: "red",
            fontSize: "32px",
          }}
        >
          *
        </span>
      ) : null}
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={handleChange ? handleChange : onChange}
            size={size}
            options={options || []}
            value={value}
            style={{ width: "100%" }}
            defaultValue={defaultValue ? defaultValue : null}
            placeholder={placeholder}
            disabled={disabled}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
