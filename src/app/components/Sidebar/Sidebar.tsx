"use client";
import React from "react";
import BriefCase from "../icons/BriefCase";
import DropDownOrg from "../icons/DropDownOrg";
import Home from "../icons/Home";
import sidebarElements from "../SidebarElements/SidebarElements";
import SidebarSections from "../SidebarSections/SidebarSections";

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
