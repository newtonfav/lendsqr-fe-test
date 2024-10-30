import React from "react";
import ThreeDots from "../icons/ThreeDots";
import formatDate from "../../utils/functions/formatDate";
import getRandomStatus from "../../utils/functions/getRandomStatus";

interface IUserRow {
  organisation: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
}

export default function UserTableRow({
  organisation,
  username,
  email,
  phone,
  dateJoined,
}: IUserRow) {
  const status = getRandomStatus();

  return (
    <div className="tablerow">
      <span className="tablerow__organisation">{organisation}</span>
      <span className="tablerow__username">{username}</span>
      <span className="tablerow__email">{email.toLowerCase()}</span>
      <span className="tablerow__phone">{phone}</span>
      <span className="tablerow__datejoined">{formatDate(dateJoined)}</span>
      <span className={`tablerow__status tablerow__status--${status}`}>
        {status}
      </span>
      <span className="tablerow__dots">
        <ThreeDots />
      </span>
    </div>
  );
}
