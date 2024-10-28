import React, { ReactNode } from "react";
import NavBar from "../components/DashboardNavbar/NavBar";
import { Work_Sans } from "next/font/google";

const worksans = Work_Sans({ subsets: ["latin"] });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={`dashboard  ${worksans.className}`}>
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
