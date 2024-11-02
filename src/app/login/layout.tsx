import React, { ReactNode } from "react";
import LogoText from "../assets/icons/logo-text";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="layout__logo">
        <LogoText size={28} />
      </div>
      <div>{children}</div>
    </div>
  );
}
