import BriefCase from "../../assets/icons/brief-case";
import Users from "../../assets/icons/users";
import Guarantors from "../../assets/icons/guarantors";
import Sack from "../../assets/icons/sack";
import Handshake from "../../assets/icons/handshake";
import Savings from "../../assets/icons/savings";
import LoanRequests from "../../assets/icons/loan-requests";
import Whitelist from "../../assets/icons/whitelist";
import Karma from "../../assets/icons/karma";
import SavingsProducts from "../../assets/icons/savings-products";
import FeesAndCharges from "../../assets/icons/fees-and-charges";
import Transactions from "../../assets/icons/transactions";
import Services from "../../assets/icons/services";
import ServiceAccount from "../../assets/icons/service-account";
import Settlements from "../../assets/icons/settlements";
import Reports from "../../assets/icons/reports";
import Preferences from "../../assets/icons/preferences";
import FeesAndPricing from "../../assets/icons/fees-and-pricing";
import LogOut from "../../assets/icons/logout";
import { FC } from "react";
import System from "../../assets/icons/system";
import AuditLogs from "../../assets/icons/auditlogs";

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
