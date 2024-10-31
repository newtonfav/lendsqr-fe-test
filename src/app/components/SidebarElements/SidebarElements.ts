import BriefCase from "../icons/BriefCase";
import Users from "../icons/Users";
import Guarantors from "../icons/Guarantors";
import Sack from "../icons/Sack";
import Handshake from "../icons/Handshake";
import Savings from "../icons/Savings";
import LoanRequests from "../icons/LoanRequests";
import Whitelist from "../icons/Whitelist";
import Karma from "../icons/Karma";
import SavingsProducts from "../icons/SavingsProducts";
import FeesAndCharges from "../icons/FeesAndCharges";
import Transactions from "../icons/Transactions";
import Services from "../icons/Services";
import ServiceAccount from "../icons/ServiceAccount";
import Settlements from "../icons/Settlements";
import Reports from "../icons/Reports";
import Preferences from "../icons/Preferences";
import FeesAndPricing from "../icons/FeesAndPricing";
import AuditLogs from "../icons/AuditLogs";
import LogOut from "../icons/LogOut";
import { FC } from "react";
import System from "../icons/System";

export interface ISectionChildren {
  Icon: FC;
  name: string;
  link: string;
  key: string;
}

export interface ISection {
  section: string;
  children: ISectionChildren[];
}

const sidebarElements: Required<ISection[]> = [
  {
    section: "customers",
    children: [
      {
        Icon: Users,
        name: "Users",
        link: "/dashboard/users",
        key: "users",
      },
      {
        Icon: Guarantors,
        name: "Guarantors",
        link: "/dashboard/guarantors",
        key: "guarantors",
      },
      {
        Icon: Sack,
        name: "Loans",
        link: "/dashboard/loans",
        key: "loans",
      },
      {
        Icon: Handshake,
        name: "Decision Models",
        link: "/dashboard/decision-models",
        key: "decison-models",
      },
      {
        Icon: Savings,
        name: "Savings",
        link: "/dashboard/savings",
        key: "savings",
      },
      {
        Icon: LoanRequests,
        name: "Loan Requests",
        link: "/dashboard/loan-requests",
        key: "loan-requests",
      },
      {
        Icon: Whitelist,
        name: "Whitelist",
        link: "/dashboard/whitelist",
        key: "whitelist",
      },
      {
        Icon: Karma,
        name: "Karma",
        link: "/dashboard/karma",
        key: "karma",
      },
    ],
  },
  {
    section: "businesses",
    children: [
      {
        Icon: BriefCase,
        name: "Organization",
        link: "/dashboard/organization",
        key: "organization",
      },
      {
        Icon: LoanRequests,
        name: "Loan Products",
        link: "/dashboard/loan-products",
        key: "loan-products",
      },
      {
        Icon: SavingsProducts,
        name: "Savings Products",
        link: "/dashboard/savings-products",
        key: "savings-products",
      },
      {
        Icon: FeesAndCharges,
        name: "Fees and Charges",
        link: "/dashboard/fees-and-charges",
        key: "fees-and-charges",
      },
      {
        Icon: Transactions,
        name: "Transactions",
        link: "/dashboard/transactions",
        key: "transactions",
      },
      {
        Icon: Services,
        name: "Services",
        link: "/dashboard/services",
        key: "services",
      },
      {
        Icon: ServiceAccount,
        name: "Service Accounts",
        link: "/dashboard/service-accounts",
        key: "service-accounts",
      },
      {
        Icon: Settlements,
        name: "Settlements",
        link: "/dashboard/settlements",
        key: "settlements",
      },
      {
        Icon: Reports,
        name: "Reports",
        link: "/dashboard/reports",
        key: "reports",
      },
    ],
  },
  {
    section: "settings",
    children: [
      {
        Icon: Preferences,
        name: "Preferences",
        link: "/dashboard/preferences",
        key: "preferences",
      },
      {
        Icon: FeesAndPricing,
        name: "Fees and Pricing",
        link: "/dashboard/fees-and-pricing",
        key: "fees-and-pricing",
      },
      {
        Icon: AuditLogs,
        name: "Audit Logs",
        link: "/dashboard/audit-logs",
        key: "audit-logs",
      },
      {
        Icon: System,
        name: "System Messages",
        link: "/dashboard/messages",
        key: "system-messages",
      },
      {
        Icon: LogOut,
        name: "Log Out",
        link: "/login",
        key: "log-out",
      },
    ],
  },
];

export default sidebarElements;
