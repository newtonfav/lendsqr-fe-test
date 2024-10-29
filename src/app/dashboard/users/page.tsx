import React, { FC } from "react";
import UsersStats from "../../components/UsersStats/UsersStats";
import DashboardUsers from "../../components/icons/DashboardUsers";
import ActiveUsers from "../../components/icons/ActiveUsers";
import UsersWithoans from "../../components/icons/UsersWithoans";
import UsersWithSavings from "../../components/icons/UsersWithSavings";
import UsersTable from "../../components/UsersTable/UsersTable";

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

export default function Users() {
  return (
    <div className="users">
      <h1>Users</h1>
      <div className="users__userstats">
        {userstats.map(({ name, Icon, stat }, index) => (
          <UsersStats name={name} Icon={Icon} stat={stat} key={index} />
        ))}
      </div>

      <UsersTable />

      <div className="users__footer">footer</div>
    </div>
  );
}
