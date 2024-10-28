"use client";
import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import { Roboto } from "next/font/google";
import BellIcon from "../icons/BellIcon";

const roboto = Roboto({ weight: "300", subsets: ["latin"] });

export default function NavBar() {
  return (
    <div className="navbar">
      <Logo sizeIcon={20} sizeText={25} />

      <Search />

      <div className="navbar__section">
        <span className={`navbar__section--docs ${roboto.className}`}>
          Docs
        </span>

        <span className="navbar__section--bell">
          <BellIcon />
        </span>

        <Profile />
      </div>
    </div>
  );
}
