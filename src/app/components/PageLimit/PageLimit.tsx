import React, { useState } from "react";

interface PageLimitProps {
  onPageLimitChange: (query: string, value: string) => void;
}

function PageLimit({ onPageLimitChange }: PageLimitProps) {
  const [selectedValue, setSelectedValue] = useState<number>(10);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = Number(event.target.value);
    setSelectedValue(newValue);
    onPageLimitChange("limit", String(newValue));
  };

  return (
    <span className="">
      <select
        value={selectedValue}
        onChange={handleSelectChange}
        className="usersfooter__pagenumber--dropdown"
      >
        {[1, 5, 10, 20].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </span>
  );
}

export default PageLimit;
