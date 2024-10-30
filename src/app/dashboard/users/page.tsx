import React, { FC } from "react";
import UsersStats from "../../components/UsersStats/UsersStats";
import DashboardUsers from "../../components/icons/DashboardUsers";
import ActiveUsers from "../../components/icons/ActiveUsers";
import UsersWithoans from "../../components/icons/UsersWithoans";
import UsersWithSavings from "../../components/icons/UsersWithSavings";
import UsersTable from "../../components/UsersTable/UsersTable";
import UsersDashboardFooter from "../../components/UsersDashboardFooter/UsersDashboardFooter";
import { IUser } from "../../utils/models/userModel";

export interface IUserStats {
  Icon: FC;
  name: string;
  stat: number;
}

const userstats: IUserStats[] = [
  {
    Icon: DashboardUsers,
    name: "users",
    stat: 2453,
  },
  {
    Icon: ActiveUsers,
    name: "active users",
    stat: 2453,
  },
  {
    Icon: UsersWithoans,
    name: "users with loans",
    stat: 12435,
  },
  {
    Icon: UsersWithSavings,
    name: "users with savings",
    stat: 102453,
  },
];

export default async function Users({ searchParams }) {
  const limit = (await searchParams?.limit) ?? 10;
  console.log(typeof limit);

  const res = await fetch(`${process.env.URL}/users?page=1&limit=${limit}`);

  const data: IUser[] = await res.json();

  return (
    <div className="users">
      <h1>Users</h1>
      <div className="users__userstats">
        {userstats.map(({ name, Icon, stat }, index) => (
          <UsersStats name={name} Icon={Icon} stat={stat} key={index} />
        ))}
      </div>

      <UsersTable usersData={data} />

      <UsersDashboardFooter />
    </div>
  );
}
