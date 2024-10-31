"use client";
import React, { useEffect, useRef, useState } from "react";
import FilterIcon from "../icons/Filter";
import Filter from "../Filter/Filter";

interface Header {
  name: string;
  responsive: boolean;
}

const headers: Header[] = [
  {
    name: "organisation",
    responsive: false,
  },
  {
    name: "username",
    responsive: true,
  },
  {
    name: "email",
    responsive: true,
  },

  {
    name: "phone number",
    responsive: false,
  },
  {
    name: "date joined",
    responsive: false,
  },
  {
    name: "status",
    responsive: true,
  },
];

export default function UserTableHeader() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prev) => !prev);
  };

  // Close the filter when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsFilterVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // Handle the filter change logic here
    console.log(e.target.name, e.target.value);
  };

  return (
    <div className="usertableheader" ref={filterRef}>
      {headers.map(({ name }, index) => (
        <div
          key={index}
          className="usertableheader__container"
          onClick={toggleFilterVisibility}
        >
          <div className="usertableheader__container--text">{name}</div>
          <span>
            <FilterIcon />
          </span>
        </div>
      ))}
      {isFilterVisible && (
        <div className="usertableheader__container--filter">
          <Filter
            label="Organization"
            name="organisation"
            type="select"
            options={[
              { value: "optionvalue", label: "Select" },
              // more options
            ]}
            onChange={handleFilterChange}
          />
          <Filter
            label="Username"
            name="username"
            type="text"
            placeholder="User"
            onChange={handleFilterChange}
          />
          <Filter
            label="Email"
            name="email"
            type="text"
            placeholder="Email"
            onChange={handleFilterChange}
          />
          <Filter
            label="Date"
            name="date"
            type="date"
            onChange={handleFilterChange}
          />
          <Filter
            label="Phone Number"
            name="phone"
            type="text"
            placeholder="Phone"
            onChange={handleFilterChange}
          />
          <Filter
            label="Status"
            name="status"
            type="select"
            options={[
              { value: "optionvalue", label: "Status" },
              // Add more status options as needed
            ]}
            onChange={handleFilterChange}
          />
          <div className="filter__button">
            <button className="filter__button--reset">Reset</button>
            <button className="filter__button--filter">Filter</button>
          </div>
        </div>
      )}
    </div>
  );
}
