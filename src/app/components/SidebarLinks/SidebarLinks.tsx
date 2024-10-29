import React, { ReactNode } from "react";
import NavLink from "../NavLink/NavLink";

interface ISidebarLinks {
  children: ReactNode;
  link: string;
}

export default function SidebarLinks({ children, link }: ISidebarLinks) {
  return (
    <NavLink href={link} className="sidebar--elements">
      {children}
    </NavLink>
  );
}
