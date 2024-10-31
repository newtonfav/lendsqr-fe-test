import React from "react";
import DashboardUsers from "../../icons/DashboardUsers";
import ActiveUsers from "../../icons/ActiveUsers";
import UsersWithoans from "../../icons/UsersWithoans";
import UsersWithSavings from "../../icons/UsersWithSavings";

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
          <span className="skeleton">1234</span>
        </div>
      ))}
    </div>
  );
}
