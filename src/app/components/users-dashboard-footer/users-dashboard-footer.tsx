"use client";
import React from "react";
import PageLimit from "../page-limit/page-limit";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Pagination from "../pagination/pagination";

export default function UsersDashboardFooter({
  totalUsers,
}: {
  totalUsers: number;
}) {
  const totalPages = 100 / totalUsers;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function updateUrlParams(query: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(query, value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="usersfooter">
      <div className="usersfooter__pagenumber">
        Showing
        <PageLimit onPageLimitChange={updateUrlParams} />
        out of 100
      </div>

      <Pagination totalPages={totalPages} onPageChange={updateUrlParams} />
    </div>
  );
}
