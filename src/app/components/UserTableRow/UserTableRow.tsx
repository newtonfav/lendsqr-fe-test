import React from "react";
import ThreeDots from "../icons/ThreeDots";

export default function UserTableRow() {
  return (
    <div className="tablerow">
      <span className="tablerow__organisation">lendsqr</span>
      <span className="tablerow__username">adedeji</span>
      <span className="tablerow__email">adedeji@lendsqr.com</span>
      <span className="tablerow__phone">08078903721</span>
      <span className="tablerow__datejoined">Apr 30, 2020 10:00 AM</span>
      <span className="tablerow__status">pending</span>
      <span className="tablerow__dots">
        <ThreeDots />
      </span>
    </div>
  );
}
