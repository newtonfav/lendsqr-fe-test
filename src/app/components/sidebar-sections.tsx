import React from "react";
import SidebarLinks from "./sidebar-links";
import { ISection } from "../utils/helpers/sidebar-elements";

export default function SidebarSections({ section, children }: ISection) {
  return (
    <div className="sidebar__section">
      <p className="sidebar__section--header">{section}</p>
      {children.map(({ Icon, name, key, link }) => (
        <SidebarLinks key={key} link={link}>
          <Icon />
          <span>{name}</span>
        </SidebarLinks>
      ))}
    </div>
  );
}
