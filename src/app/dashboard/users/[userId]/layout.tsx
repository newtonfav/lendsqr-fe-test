import { ReactNode } from "react";
import BackArrow from "@/src/app/assets/icons/back-arrow";
import ProfileIcon from "@/src/app/assets/icons/profile-icon";
import Star from "@/src/app/assets/icons/star";
import UnStar from "@/src/app/assets/icons/unstar";
import Link from "next/link";
import React from "react";
import { IUser } from "@/src/app/models/userModel";
import { UserProvider } from "@/src/app/contexts/user-context";
import UserPageNav from "@/src/app/components/user-page-nav";
import { mockUsersData } from "@/src/app/mock/mockUsersData";
import { notFound } from "next/navigation";

type Params = Promise<{ userId: string }>;

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Params;
}) {
  const { userId } = await params;

  // Use mock data instead of fetching
  const data = (mockUsersData as IUser[]).find((user) => user.id === userId);

  if (!data) return notFound();

  const { lastName, userID } = data.profile;

  const userpageNavigation = [
    {
      text: "General Details",
      active: true,
      link: `/dashboard/users/${userId}`,
    },
    {
      text: "Documents",
      active: false,
      link: `/dashboard/users/${userId}/documents`,
    },
    {
      text: "Bank Details",
      active: false,
      link: `/dashboard/users/${userId}/bank-details`,
    },
    {
      text: "Loans",
      active: false,
      link: `/dashboard/users/${userId}/loans`,
    },
    {
      text: "Savings",
      active: false,
      link: `/dashboard/users/${userId}/savings`,
    },
    {
      text: "App and System",
      active: false,
      link: `/dashboard/users/${userId}/app-and-system`,
    },
  ];

  return (
    <div className="userpage">
      <Link href="/dashboard/users">
        <div className="userpage__back">
          <BackArrow />
          <span>Back to Users</span>
        </div>
      </Link>

      <div className="userpage__heading">
        <h1>User Details</h1>

        <div className="userpage__heading--buttons">
          <button aria-label="blacklist user" className="button--blacklist">
            Blacklist User
          </button>
          <button aria-label="activate user" className="button--activate">
            Activate User
          </button>
        </div>
      </div>

      <div className="userpage__container">
        <div className="userpage__details">
          <div className="userpage__details--profileicon">
            <ProfileIcon />
          </div>

          <div className="userpage__details--profile">
            <h1 className="userpage__details--name">
              {data.firstName} {lastName}
            </h1>
            <span className="userpage__details--userid">{`LSQ${userID}`}</span>
          </div>

          <div className="userpage__details--usertier">
            <p>User&apos;s Tier</p>
            <span>
              <Star />
              {Array.from([1, 2]).map((index) => (
                <UnStar key={index} />
              ))}
            </span>
          </div>

          <div className="userpage__details--balance">
            <h3 className="">₦{data.accountBalance.toLocaleString()}</h3>
            <span>{data.accountNumber}/Providus Bank</span>
          </div>
        </div>

        <div className="userpage__details--nav">
          {userpageNavigation.map(({ text, link, active }, index) => (
            <UserPageNav
              text={text}
              link={link}
              index={index}
              active={active}
              key={index}
            />
          ))}
        </div>
      </div>

      <UserProvider user={data}>
        <div className="userpage__children">{children}</div>
      </UserProvider>
    </div>
  );
}
