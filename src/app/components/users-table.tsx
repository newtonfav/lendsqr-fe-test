import React from "react";
import { IUser } from "../models/userModel";
import filterOrganisationsFromUserdata from "../utils/functions/filterOrganisationsFromUserdata";

import { FilterProvider } from "../contexts/table-filter-context";
import UserTableHeader from "./user-table-header";
import UsersTableFilter from "./users-table-filter";

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
  const res = await fetch(
    `${process.env.URL}/users?firstName=${firstName}&page=${page}&limit=${limit}`
  );
  const data: IUser[] | string = await res.json();

  const userData = Array.isArray(data) ? data : [];
  const organisations = Array.isArray(data)
    ? filterOrganisationsFromUserdata(data)
    : [];

  return (
    <FilterProvider unfilteredData={userData}>
      <div className="usertable">
        <UserTableHeader organisations={organisations} />

        {userData.length === 0 ? (
          <span className="usertable__notfound">User Not Found</span>
        ) : (
          <UsersTableFilter />
        )}
      </div>
    </FilterProvider>
  );
}
