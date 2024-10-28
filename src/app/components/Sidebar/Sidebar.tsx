import React from "react";
import BriefCase from "../icons/BriefCase";
import DropDownOrg from "../icons/DropDownOrg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar--organisation">
        <BriefCase />
        Switch Organization
        <DropDownOrg />
      </div>
    </div>
  );
}
