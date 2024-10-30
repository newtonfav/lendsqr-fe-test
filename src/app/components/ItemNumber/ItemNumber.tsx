import React, { useState } from "react";

const ItemNumber: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<number>(10);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(Number(event.target.value));
  };

  return (
    <span className="usersfooter__pagenumber--numberrr">
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
};

export default ItemNumber;
