"use client";
import React, { useEffect, useRef, useState } from "react";
import ThreeDots from "../assets/icons/threedots";
import formatDate from "../utils/functions/formatDate";
import { getStatusFromApiValue } from "../utils/functions/getUserFieldFromNumericValue";
import Link from "next/link";
import Blacklist from "../assets/icons/blacklist";
import View from "../assets/icons/view";
import Activate from "../assets/icons/activate";
import { useFilter } from "../contexts/table-filter-context";

interface IUserRow {
  organisation: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: string;
  userId: string;
}

export default function UserTableRow({
  organisation,
  email,
  firstName,
  lastName,
  phone,
  dateJoined,
  status,
  userId,
}: IUserRow) {
  const userStatus = getStatusFromApiValue(Number(status)).toLowerCase();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { updateUserStatus } = useFilter();

  const toggleMenuVisibility = () => {
    setIsMenuVisible((prev) => !prev);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuVisible(false);
      }
    };

    // Add event listener for clicks on the document
    document.addEventListener("mousedown", handleClickOutside);

    //cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleBlacklistUser() {
    updateUserStatus(userId, "6");
    toggleMenuVisibility();
  }

  function handleActivateUser() {
    updateUserStatus(userId, "8");
    toggleMenuVisibility();
  }

  return (
    <div className="tablerow">
      <Link href={`users/${userId}`} className="tablerow__organisation">
        <span>{organisation}</span>
      </Link>
      <Link href={`users/${userId}`} className="tablerow__username">
        <span>{`${firstName} ${lastName}`}</span>
      </Link>
      <span className="tablerow__email">{email.toLowerCase()}</span>
      <span className="tablerow__phone">{phone}</span>
      <span className="tablerow__datejoined">{formatDate(dateJoined)}</span>
      <span className={`tablerow__status tablerow__status--${userStatus}`}>
        {userStatus}
      </span>

      {/* Toggle menu visibility on click */}
      <span className="tablerow__dots" onClick={toggleMenuVisibility}>
        <ThreeDots />
      </span>

      {/* Conditionally render the menu based on isMenuVisible */}
      {isMenuVisible && (
        <div ref={menuRef} className="tablerow__menu">
          <Link href={`users/${userId}`} className="tablerow__menu--view">
            <View />
            View Details
          </Link>
          <span
            className="tablerow__menu--blacklist"
            onClick={handleBlacklistUser}
          >
            <Blacklist />
            Blacklist User
          </span>
          <span
            className="tablerow__menu--activate"
            onClick={handleActivateUser}
          >
            <Activate />
            Activate User
          </span>
        </div>
      )}
    </div>
  );
}
