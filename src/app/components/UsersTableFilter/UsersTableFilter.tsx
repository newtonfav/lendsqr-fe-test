"use client";
import React from "react";
import UserTableRow from "../UserTableRow/UserTableRow";
import { useFilter } from "../../context/tableFilterContext";

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
