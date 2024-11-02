import React, { ReactNode } from "react";
import NavBar from "../components/navbar/navbar";
import { Work_Sans } from "next/font/google";
import Sidebar from "../components/sidebar/sidebar";

const worksans = Work_Sans({ subsets: ["latin"] });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={`dashboard  ${worksans.className}`}>
      <NavBar />
      <div className="dashboard__container">
        <Sidebar />

        <div className="dashboard__container--children">{children}</div>
      </div>
    </div>
  );
}
