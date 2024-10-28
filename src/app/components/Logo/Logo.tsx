import React from "react";
import LogoIcon from "../icons/LogoIcon";
import LogoText from "../icons/LogoText";

export default function Logo({
  sizeText,
  sizeIcon,
}: {
  sizeText?: number;
  sizeIcon?: number;
}) {
  return (
    <div className="logo">
      <LogoIcon size={sizeIcon} />
      <LogoText size={sizeText} />
    </div>
  );
}
