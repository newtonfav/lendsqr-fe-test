"use client";
import React from "react";
// import DropDownOrg from "../icons/DropDownOrg";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";
import ItemNumber from "../ItemNumber/ItemNumber";

export default function UsersDashboardFooter() {
  return (
    <div className="usersfooter">
      <div className="usersfooter__pagenumber">
        Showing
        <ItemNumber />
        out of 100
      </div>

      <div className="usersfooter__pagination">
        <span className="usersfooter__pagination--leftarrow">
          <LeftArrow />
        </span>

        <span className="usersfooter__pagination--pages">1 2 3 ... 15 16</span>

        <span className="usersfooter__pagination--rightarrow">
          <RightArrow />
        </span>
      </div>
    </div>
  );
}
