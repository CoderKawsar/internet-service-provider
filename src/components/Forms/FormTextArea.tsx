import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

const FormTextArea = ({
  name,
  label,
  rows,
  value,
  placeholder,
  required,
  className,
}: TextAreaProps) => {
  const { control } = useFormContext();
  return (
    <div>
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
        name={name}
        control={control}
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
            required={required}
            className={className}
          />
        )}
      />
    </div>
  );
};

export default FormTextArea;
