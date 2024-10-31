import Image from "next/image";
import React from "react";
import adediji from "@/src/public/adediji.png";
import DropDown from "../../assets/icons/Dropdown";

export default function Profile() {
  return (
    <div className="navbar__profile">
      <Image
        src={adediji}
        width={50}
        height={50}
        alt="adediji profile pic"
        className="navbar__profile--image"
      />
      <span>Adedeji</span>
      <DropDown />
    </div>
  );
}
