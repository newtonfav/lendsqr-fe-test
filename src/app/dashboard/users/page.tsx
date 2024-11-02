import React, { Suspense } from "react";
import UsersTable from "../../components/users-table";
import UsersDashboardFooter from "../../components/users-dashboard-footer";
import UsersStaticticsSkeleton from "../../components/skeleton-loaders/users-statictics-skeleton";
import UsersTableSkeleton from "../../components/skeleton-loaders/users-table-skeleton";
import UsersStatistics from "../../components/users-statistics";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Page(props: {
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
        <UsersStatistics />
      </Suspense>

      <Suspense fallback={<UsersTableSkeleton />}>
        <UsersTable limit={limit} page={page} firstName={firstName} />
      </Suspense>

      <UsersDashboardFooter totalUsers={usersLength} />
    </div>
  );
}
