import React from "react";
import UserTableHeader from "../../UserTableHeader/UserTableHeader";
import ThreeDots from "../../icons/ThreeDots";

export default function UsersTableSkeleton() {
  return (
    <div className="usertable">
      <UserTableHeader />

      <div className="usertable__row">
        {Array.from({ length: 8 }, (_, index) => index + 1).map((index) => (
          <div className="tablerow skeleton" key={index}>
            <span className="tablerow__organisation">
              <span className="">organisation</span>
            </span>
            <span className="tablerow__username">
              <span>firstName</span>
            </span>
            <span className="tablerow__email">email</span>
            <span className="tablerow__phone">phone</span>
            <span className="tablerow__datejoined"></span>
            <span className={`tablerow__status`}>userStatus</span>
            <span className="tablerow__dots">
              <ThreeDots />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
