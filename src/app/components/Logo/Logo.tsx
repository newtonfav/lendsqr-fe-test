import React from "react";
import LogoIcon from "../../assets/icons/LogoIcon";
import LogoText from "../../assets/icons/LogoText";
import Link from "next/link";

export default function Logo({
  sizeText,
  sizeIcon,
}: {
  sizeText?: number;
  sizeIcon?: number;
}) {
  return (
    <Link href="/dashboard/users">
      <div className="logo">
        <LogoIcon size={sizeIcon} />
        <LogoText size={sizeText} />
      </div>
    </Link>
  );
}
