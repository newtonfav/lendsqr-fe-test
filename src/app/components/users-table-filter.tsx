"use client";
import React from "react";
import { useFilter } from "../contexts/table-filter-context";
import UserTableRow from "./user-table-row";

export default function UsersTableFilter() {
  const { filteredData } = useFilter();

  return (
    <>
      {filteredData?.length === 0 ? (
        <span className="usertable__notfound">User Not Found</span>
      ) : (
        <div className="usertable__row">
          {filteredData?.map(
            ({
              organisation,
              profile: { email, phoneNumber, lastName },
              createdAt,
              firstName,
              status,
              id,
            }) => (
              <UserTableRow
                key={id}
                firstName={firstName}
                lastName={lastName}
                status={status}
                organisation={organisation}
                email={email}
                dateJoined={createdAt}
                phone={phoneNumber}
                userId={id}
              />
            )
          )}
        </div>
      )}
    </>
  );
}
