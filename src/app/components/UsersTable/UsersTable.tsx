import React from "react";
import UserTableHeader from "../UserTableHeader/UserTableHeader";
import UserTableRow from "../UserTableRow/UserTableRow";
import { IUser } from "../../utils/models/userModel";

interface UsersTableProps {
  usersData: IUser[];
}

export default function UsersTable({ usersData }: UsersTableProps) {
  return (
    <div className="usertable">
      <UserTableHeader />

      <div className="usertable__row">
        {usersData.map(
          ({
            organisation,
            profile: { email, userName, phoneNumber },
            createdAt,
            id,
          }) => (
            <UserTableRow
              key={id}
              organisation={organisation}
              email={email}
              username={userName}
              dateJoined={createdAt}
              phone={phoneNumber}
            />
          )
        )}
      </div>
    </div>
  );
}
