import { ChangeEvent, useState } from "react";

export type UseInput<T> = [
  T,
  (value: T | ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  () => void
];

const useInput = <T>(initial: T): UseInput<T> => {
  const [value, setValue] = useState<T>(initial);

  const handleChange = (
    newValue: T | ChangeEvent<HTMLInputElement | HTMLSelectElement> | null
  ) => {
    if (
      newValue !== null &&
      typeof newValue === "object" &&
      "target" in newValue
    ) {
      // Handle change event
      setValue(
        typeof value === "string"
          ? (newValue.target.value as T)
          : (Number(
              newValue.target.value.toString().length < 12
                ? newValue.target.value
                : value
            ) as T)
      );
    } else if (newValue !== null) {
      // Handle direct value assignment
      setValue(newValue);
    }
  };

  return [value, handleChange, () => setValue(initial)];
};

export default useInput;
