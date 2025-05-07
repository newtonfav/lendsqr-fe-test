import React from "react";
import { IUser } from "../models/userModel";
import filterOrganisationsFromUserdata from "../utils/functions/filterOrganisationsFromUserdata";

import { FilterProvider } from "../contexts/table-filter-context";
import UserTableHeader from "./user-table-header";
import UsersTableFilter from "./users-table-filter";
import { mockUsersData } from "../mock/mockUsersData";

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
  const data: IUser[] | string = mockUsersData;
  const userData = Array.isArray(data) ? data : [];

  // Convert limit and page to numbers
  const pageNumber = parseInt(Array.isArray(page) ? page[0] : page || "1");
  const limitNumber = parseInt(Array.isArray(limit) ? limit[0] : limit || "10");

  // Perform filtering
  const filteredUsers = userData.filter((user) => {
    if (!firstName) return true;
    const searchTerm = Array.isArray(firstName) ? firstName[0] : firstName;
    return user.firstName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Perform pagination
  const startIndex = (pageNumber - 1) * limitNumber;
  const endIndex = startIndex + limitNumber;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  const organisations = filterOrganisationsFromUserdata(filteredUsers);

  return (
    <FilterProvider unfilteredData={filteredUsers}>
      <div className="usertable">
        <UserTableHeader organisations={organisations} />

        {paginatedUsers.length === 0 ? (
          <span className="usertable__notfound">User Not Found</span>
        ) : (
          <UsersTableFilter data={paginatedUsers} />
        )}
      </div>
    </FilterProvider>
  );
}
