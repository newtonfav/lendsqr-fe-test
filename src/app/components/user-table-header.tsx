"use client";
import React, { useEffect, useRef, useState } from "react";
import { useFilter } from "../contexts/table-filter-context";
import formatDate from "../utils/functions/formatDate";
import { getApiValuesForStatus } from "../utils/functions/getNumericValueFromStatus";
import Filter from "./filter";
import FilterIcon from "../assets/icons/filter";

type Status = "inactive" | "pending" | "blacklisted" | "active";

interface FilterValues {
  organisation: string;
  username: string;
  email: string;
  date: string;
  phone: string;
  status: string;
}

interface IUserTableHeader {
  organisations?: string[];
}

const headers: string[] = [
  "organisation",
  "username",
  "email",
  "phone number",
  "date joined",
  "status",
];

const initialFilter = {
  organisation: "",
  username: "",
  email: "",
  date: "",
  phone: "",
  status: "",
};

export default function UserTableHeader({ organisations }: IUserTableHeader) {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useFilter();
  const [filterValues, setFilterValues] = useState<FilterValues>(initialFilter);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleResetFilters = () => {
    setFilterValues(initialFilter);
    dispatch({ type: "reset" });
    toggleFilterVisibility();
  };

  const handleFilterSubmit = () => {
    const lowerCaseFilterValues = {
      ...filterValues,
      organisation: filterValues.organisation.toLowerCase(),
      username: filterValues.username.toLowerCase(),
      email: filterValues.email.toLowerCase(),
      date: filterValues.date ? formatDate(filterValues.date) : "",
      status: filterValues.status
        ? getApiValuesForStatus(filterValues.status as unknown as Status)
        : "",
    };

    dispatch({ type: "filter", payload: lowerCaseFilterValues });
    toggleFilterVisibility();
  };

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

  return (
    <div className="usertableheader" ref={filterRef}>
      {headers.map((name, index) => (
        <div
          key={index}
          className={`usertableheader__container usertableheader__${
            name.split(" ")[0]
          }`}
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
            options={organisations}
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
            options={["inactive", "pending", "blacklisted", "active"]}
            onChange={handleFilterChange}
          />
          <div className="filter__button">
            <button
              className="filter__button--reset"
              onClick={handleResetFilters}
            >
              Reset
            </button>
            <button
              className="filter__button--filter"
              onClick={handleFilterSubmit}
            >
              Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
