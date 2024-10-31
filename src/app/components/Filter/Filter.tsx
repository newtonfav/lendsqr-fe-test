import React from "react";

interface FilterProps {
  label: string;
  name: string;
  type: "select" | "text" | "date";
  options?: { value: string; label: string }[];
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  value?: string;
}

const Filter: React.FC<FilterProps> = ({
  label,
  name,
  type,
  options,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <div className="filter">
      <label htmlFor={name}>{label}</label>
      {type === "select" ? (
        <select
          className="filter__input"
          name={name}
          id={name}
          onChange={onChange}
          value={value}
        >
          {options &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="filter__input"
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  );
};

export default Filter;
