"use client";
import React, { useEffect, useRef, useState } from "react";
import ThreeDots from "../icons/ThreeDots";
import formatDate from "../../utils/functions/formatDate";
import { getStatusFromNumericValue } from "../../utils/functions/getUserFieldFromNumericValue";
import Link from "next/link";
import Blacklist from "../icons/Blacklist";
import Activate from "../icons/Activate";
import View from "../icons/View";

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
  const userStatus = getStatusFromNumericValue(status);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
          <span className="tablerow__menu--blacklist">
            <Blacklist />
            Blacklist User
          </span>
          <span className="tablerow__menu--activate">
            <Activate />
            Activate User
          </span>
        </div>
      )}
    </div>
  );
}
