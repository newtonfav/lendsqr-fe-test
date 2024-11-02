import React from "react";
import UserTableHeader from "../user-table-header/user-table-header";
import UserTableRow from "../user-table-row/user-table-row";
import { IUser } from "../../utils/models/userModel";
import filterOrganisationsFromUserdata from "../../utils/helpers/filterOrganisationsFromUserdata";
import UsersTableFilter from "../users-table-filter/users-table-filter";
import { FilterProvider } from "../../contexts/table-filter-context";

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
