import React from "react";

interface FilterProps {
  label: string;
  name: string;
  type: "select" | "text" | "date";
  options?: string[];
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  value?: string;
  className?: string;
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
      <label htmlFor={name} className={`filter__${name}`}>
        {label}
      </label>
      {type === "select" ? (
        <select
          className="filter__input"
          name={name}
          id={name}
          onChange={onChange}
          value={value}
        >
          <option value="">Select</option>
          {options &&
            options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className={`filter__input filter__${name}`}
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  );
};

export default Filter;
