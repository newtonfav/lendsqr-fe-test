import BackArrow from "@/src/app/components/icons/BackArrow";
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
          <button className="button button--blacklist">Blacklist User</button>
          <button className="button button--activate">Activate User</button>
        </div>
      </div>
    </div>
  );
}
