import React, { ChangeEvent, FC, useRef } from "react";

interface IInput {
  placeholder: string;
  value: string | number;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "password" | "number" | "email";
  clearValue?: () => void;
  error?: boolean;
  errorMessage?: string;
  className?: string;
  label?: string;
}

const Input: FC<IInput> = ({
  placeholder,
  value,
  setValue,
  type = "text",
  className = "",
  label,
  error = false,
  errorMessage = "",
}) => {
  const inputEl = useRef<HTMLInputElement>(null);

  //toggling password visibility
  const togglePasswordVisibility = () => {
    if (inputEl.current) {
      inputEl.current.type =
        inputEl.current.type === "password" ? "text" : "password";
    }
  };

  return (
    <div
      className={`input__container ${className}`}
      data-testid="input-container"
    >
      {!!label && <label className="input__container--label">{label}</label>}

      <div className="input__container--wrapper">
        <input
          ref={inputEl}
          className={`input__container--input ${className}`}
          {...{ placeholder, value, type }}
          onChange={setValue}
          data-testid="input"
        />

        {type === "password" && value && (
          <span
            onClick={togglePasswordVisibility}
            onKeyDown={togglePasswordVisibility}
            className="input__container--toggle"
            role="button"
            tabIndex={0}
          >
            show
          </span>
        )}
      </div>

      <p
        className={`input__container--error ${error ? "visible" : ""}`}
        data-testid="error-message"
      >
        {errorMessage}
      </p>
    </div>
  );
};

export default Input;
