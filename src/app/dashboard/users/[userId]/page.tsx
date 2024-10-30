import BackArrow from "@/src/app/components/icons/BackArrow";
import ProfileIcon from "@/src/app/components/icons/ProfileIcon";
import Star from "@/src/app/components/icons/Star";
import UnStar from "@/src/app/components/icons/UnStar";
import Link from "next/link";
import React from "react";

export default function UserPage() {
  return (
    <div className="userpage">
      <Link href="/dashboard/users">
        <div className="userpage__back">
          <BackArrow />
          <span>Back to Users</span>
        </div>
      </Link>

      <div className="userpage__heading">
        <h1>User Details</h1>

        <div className="userpage__heading--buttons">
          <button className="button--blacklist">Blacklist User</button>
          <button className="button--activate">Activate User</button>
        </div>
      </div>

      <div className="userpage__container">
        <div className="userpage__details">
          <div className="userpage__details--profileicon">
            <ProfileIcon />
          </div>

          <div className="userpage__details--profile">
            <h1 className="userpage__details--name">Grace Effiom</h1>
            <span className="userpage__details--userid">LSQFf587g90</span>
          </div>

          <div className="userpage__details--usertier">
            <p>User's Tier</p>
            <span>
              <Star />
              {Array.from([1, 2]).map((index) => (
                <UnStar key={index} />
              ))}
            </span>
          </div>

          <div className="userpage__details--balance">
            <h3 className="">₦200,000.00</h3>
            <span>9912345678/Providus Bank</span>
          </div>
        </div>

        <div>section</div>
      </div>
    </div>
  );
}
