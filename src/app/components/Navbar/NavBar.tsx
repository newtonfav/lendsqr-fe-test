"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import { Roboto } from "next/font/google";
import BellIcon from "../../assets/icons/BellIcon";
import Menu from "../../assets/icons/Menu";
import Sidebar from "../Sidebar/Sidebar";
import sidebarElements from "../SidebarElements/SidebarElements";
import SidebarSections from "../SidebarSections/SidebarSections";
import BriefCase from "../../assets/icons/BriefCase";
import DropDownOrg from "../../assets/icons/DropDownOrg";
import Home from "../../assets/icons/Home";
import Close from "../../assets/icons/Close";

const roboto = Roboto({ weight: "300", subsets: ["latin"] });

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  function handleMenuToggle() {
    setMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    // Add event listener when menu is open
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on component unmount or when menu closes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

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

      <div className="navbar__menu" onClick={handleMenuToggle}>
        {menuOpen ? <Close /> : <Menu />}
      </div>

      {menuOpen && (
        <div
          className={`navbar__sidebar ${menuOpen ? "active" : "inactive"}`}
          ref={menuRef}
        >
          <div className="sidebar--static">
            <BriefCase />
            Switch Organization
            <DropDownOrg />
          </div>

          <div className="sidebar--static">
            <Home />
            <span>Dashboard</span>
          </div>
          {sidebarElements.map(({ section, children }, index) => (
            <SidebarSections section={section} key={index}>
              {children}
            </SidebarSections>
          ))}
        </div>
      )}
    </div>
  );
}
