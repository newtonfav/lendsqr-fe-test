"use client";
import React from "react";
import BriefCase from "../assets/icons/brief-case";
import DropDownOrg from "../assets/icons/dropdown-org";
import Home from "../assets/icons/home";
import SidebarSections from "./sidebar-sections";
import sidebarElements from "../utils/functions/sidebar-elements";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar--static">
        <BriefCase />
        Switch Organization
        <DropDownOrg />
      </div>

      <div className="sidebar--static">
        <Home />
        <span>Dashboard</span>
      </div>

      {sidebarElements.map(({ section, children }, index) => (
        <SidebarSections section={section} key={index}>
          {children}
        </SidebarSections>
      ))}
    </div>
  );
}
