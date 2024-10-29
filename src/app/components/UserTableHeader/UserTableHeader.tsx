import React from "react";
import Filter from "../icons/Filter";

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
  return (
    <div className="usertableheader">
      {headers.map(({ name }, index) => (
        <div key={index} className="usertableheader__container">
          <div className="usertableheader__container--text">{name}</div>
          <span>
            <Filter />
          </span>
        </div>
      ))}
    </div>
  );
}
