import { ChangeEvent, useState } from "react";

export type UseInput<T> = [
  T,
  (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  () => void
];

const useInput = <T>(initial: T): UseInput<T | null> => {
  const [value, setValue] = useState<T>(initial);
  return [
    value,
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setValue(
        typeof value === "string"
          ? (e.target.value as T)
          : (Number(
              e.target.value.toString().length < 12 ? e.target.value : value
            ) as T)
      ),
    () => setValue(initial),
  ];
};

export default useInput;
