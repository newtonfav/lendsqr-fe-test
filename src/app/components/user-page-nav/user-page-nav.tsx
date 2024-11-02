"use client";
import React from "react";
import NavLink from "../navlink/navlink";

interface IUserPageNav {
  link: string;
  index: number;
  text: string;
  active: boolean;
}

export default function UserPageNav({
  link,
  index,
  text,
  active,
}: IUserPageNav) {
  return (
    <NavLink
      href={link}
      key={index}
      exact={active}
      className="userpage__nav"
      activeClassName="userpage__nav--active"
    >
      <span>{text}</span>
    </NavLink>
  );
}
