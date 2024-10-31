import React, { Suspense } from "react";
import UsersTable from "../../components/UsersTable/UsersTable";
import UsersDashboardFooter from "../../components/UsersDashboardFooter/UsersDashboardFooter";
import UsersStatics from "../../components/UsersStatistics/UsersStatistics";
import UsersStaticticsSkeleton from "../../components/SkeletonLoaders/UsersStaticsSkeleton/UsersStaticticsSkeleton";
import UsersTableSkeleton from "../../components/SkeletonLoaders/UsersTableSkeleton/UsersTableSkeleton";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Users(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const limit = searchParams?.limit || "10";
  const page = searchParams?.page || "1";
  const firstName = searchParams?.firstName || "";

  const usersLength = limit as unknown as number;

  return (
    <div className="users">
      <h1>Users</h1>
      <Suspense fallback={<UsersStaticticsSkeleton />}>
        <UsersStatics />
      </Suspense>

      <Suspense fallback={<UsersTableSkeleton />}>
        <UsersTable limit={limit} page={page} firstName={firstName} />
      </Suspense>

      <UsersDashboardFooter totalUsers={usersLength} />
    </div>
  );
}
