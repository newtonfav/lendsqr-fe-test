import React from "react";
import DashboardUsers from "../../assets/icons/dashboard-users";
import ActiveUsers from "../../assets/icons/active-users";
import UsersWithoans from "../../assets/icons/users-with-loans";
import UsersWithSavings from "../../assets/icons/users-with-savings";

const userstats = [
  {
    Icon: DashboardUsers,
    name: "users",
  },
  {
    Icon: ActiveUsers,
    name: "active users",
  },
  {
    Icon: UsersWithoans,
    name: "users with loans",
  },
  {
    Icon: UsersWithSavings,
    name: "users with savings",
  },
];

export default function UsersStaticticsSkeleton() {
  return (
    <div className="userstatistics">
      {userstats.map(({ name, Icon }, index) => (
        <div className="userstat" key={index}>
          <Icon />
          <span className="userstat__users">{name}</span>
          <div className="skeleton">0</div>
        </div>
      ))}
    </div>
  );
}
