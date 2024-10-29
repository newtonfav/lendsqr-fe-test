import React from "react";
import { IUserStats } from "../../dashboard/users/page";

export default function UsersStats({ name, stat, Icon }: IUserStats) {
  return (
    <div className="userstat">
      <Icon />
      <span className="userstat__users">{name}</span>
      <span className="userstat__number">{stat.toLocaleString()}</span>
    </div>
  );
}
