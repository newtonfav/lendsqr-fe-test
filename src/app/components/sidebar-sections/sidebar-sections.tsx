import React from "react";
import SidebarLinks from "../sidebar-links/sidebar-links";
import { ISection } from "../sidebar-elements/sidebar-elements";

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
