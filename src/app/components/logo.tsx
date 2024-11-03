import React from "react";
import LogoIcon from "../assets/icons/logo-icon";
import LogoText from "../assets/icons/logo-text";
import Link from "next/link";

export default function Logo({
  sizeText,
  sizeIcon,
}: {
  sizeText?: number;
  sizeIcon?: number;
}) {
  return (
    <Link href="/" aria-label="home page">
      <div className="logo">
        <LogoIcon size={sizeIcon} />
        <LogoText size={sizeText} />
      </div>
    </Link>
  );
}
