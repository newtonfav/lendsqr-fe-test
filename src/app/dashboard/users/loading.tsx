import React from "react";
import BackArrow from "../../assets/icons/back-arrow";
import ProfileIcon from "../../assets/icons/profile-icon";
import UnStar from "../../assets/icons/unstar";
import UserPageNav from "../../components/user-page-nav/user-page-nav";
import UserPageSkeleton from "../../components/skeleton-loaders/user-page-skeleton/user-page-skeleton";

const userpageNavigation = [
  {
    text: "General Details",
  },
  {
    text: "Documents",
  },
  {
    text: "Bank Details",
  },
  {
    text: "Loans",
  },
  {
    text: "Savings",
  },
  {
    text: "App and System",
  },
];

export default function Loading() {
  return (
    <div className="userpage">
      <div className="userpage__back">
        <BackArrow />
        <span>Back to Users</span>
      </div>

      <div className="userpage__heading">
        <h1>User Details</h1>

        <div className="userpage__heading--buttons">
          <button className="skeleton">Blacklist User</button>
          <button className="skeleton">Activate User</button>
        </div>
      </div>

      <div className="userpage__container">
        <div className="userpage__details">
          <div className="userpage__details--profileicon">
            <ProfileIcon />
          </div>

          <div className="userpage__details--profile">
            <h1 className="userpage__details--name skeleton">firstName</h1>
            <span className="userpage__details--userid skeleton">default</span>
          </div>

          <div className="userpage__details--usertier">
            <p>User's Tier</p>
            <span>
              {Array.from([1, 2, 3]).map((index) => (
                <UnStar key={index} />
              ))}
            </span>
          </div>

          <div className="userpage__details--balance">
            <h3 className="skeleton">0</h3>
            <span className="skeleton">Providus Bank</span>
          </div>
        </div>

        <div className="userpage__details--nav">
          {userpageNavigation.map(({ text }, index) => (
            <span className="userpage__nav" key={index}>
              {text}
            </span>
          ))}
        </div>
      </div>

      <div className="userpage__children">
        <UserPageSkeleton />
      </div>
    </div>
  );
}
