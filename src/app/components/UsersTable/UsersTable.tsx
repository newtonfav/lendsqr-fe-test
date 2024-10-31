import React from "react";
import UserTableHeader from "../UserTableHeader/UserTableHeader";
import UserTableRow from "../UserTableRow/UserTableRow";
import { IUser } from "../../utils/models/userModel";
import { log } from "console";

interface IUsersTableProps {
  limit: string | string[];
  page: string | string[];
  firstName: string | string[];
}

export default async function UsersTable({
  limit,
  page,
  firstName,
}: IUsersTableProps) {
  //for testing
  // await new Promise((res) => setTimeout(res, 10000));

  const res = await fetch(
    `${process.env.URL}/users?firstName=${firstName}&page=${page}&limit=${limit}`
  );
  const data: IUser[] | string = await res.json();

  return (
    <div className="usertable">
      <UserTableHeader />

      {data === "Not found" ? (
        <span className="usertable__notfound">User Not Found</span>
      ) : (
        <div className="usertable__row">
          {Array.isArray(data) &&
            data.map(
              ({
                organisation,
                profile: { email, userName, phoneNumber, lastName },
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
    </div>
  );
}
