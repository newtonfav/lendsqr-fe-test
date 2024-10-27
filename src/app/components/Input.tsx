import React, { ChangeEvent, FC } from "react";

interface IInput {
  placeholder: string;
  value: string | number;
  setValue: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type: string;
  clearValue: () => void;
  error?: boolean;
  errorMessage?: string;
  className?: string;
  label?: string;
}
const Input: FC<IInput> = ({
  placeholder,
  value,
  setValue,
  type,
  className,
  label,
  error = false,
  errorMessage = "",
}) => (
  <div
    className={`input__container ${className}`}
    data-testid="input-container"
  >
    {!!label && <div className="input__container--label">{label}</div>}
    <input
      className={`input__container--input ${className}`}
      {...{ placeholder, value, type }}
      onChange={setValue}
      data-testid="input"
    />

    {!!error && (
      <p className="input__container--error" data-testid="error-message">
        {errorMessage}
      </p>
    )}
  </div>
);

export default Input;
