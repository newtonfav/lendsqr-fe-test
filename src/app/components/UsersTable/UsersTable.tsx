import React from "react";
import UserTableHeader from "../UserTableHeader/UserTableHeader";
import UserTableRow from "../UserTableRow/UserTableRow";
import { IUser } from "../../utils/models/userModel";

interface IUsersTableProps {
  limit: string | string[];
  page: string | string[];
}

export default async function UsersTable({ limit, page }: IUsersTableProps) {
  //for testing
  // await new Promise((res) => setTimeout(res, 10000));

  const res = await fetch(
    `${process.env.URL}/users?page=${page}&limit=${limit}`
  );
  const data: IUser[] = await res.json();

  return (
    <div className="usertable">
      <UserTableHeader />

      <div className="usertable__row">
        {data.map(
          ({
            organisation,
            profile: { email, userName, phoneNumber, firstName, lastName },
            createdAt,
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
    </div>
  );
}
