import React from "react";
import UserTableHeader from "../UserTableHeader/UserTableHeader";
import UserTableRow from "../UserTableRow/UserTableRow";

export default function UsersTable() {
  return (
    <div className="usertable">
      <UserTableHeader />

      <div className="usertable__row">
        <UserTableRow />
        <UserTableRow />
        <UserTableRow />
        <UserTableRow />
        <UserTableRow />
        <UserTableRow />
        <UserTableRow />
        <UserTableRow />
        <UserTableRow />
        <UserTableRow />
      </div>
    </div>
  );
}
