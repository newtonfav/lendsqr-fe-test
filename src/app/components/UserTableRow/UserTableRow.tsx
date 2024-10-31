import React from "react";
import ThreeDots from "../icons/ThreeDots";
import formatDate from "../../utils/functions/formatDate";
import { getStatusFromNumericValue } from "../../utils/functions/getUserFieldFromNumericValue";
import Link from "next/link";

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

  return (
    <div className="tablerow">
      <Link href={`users/${userId}`} className="tablerow__organisation">
        <span className="">{organisation}</span>
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
      <span className="tablerow__dots">
        <ThreeDots />
      </span>
    </div>
  );
}
