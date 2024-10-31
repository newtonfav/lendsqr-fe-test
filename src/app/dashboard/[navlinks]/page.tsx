import React from "react";

type Params = Promise<{ navlinks: string }>;

export default async function Page({ params }: { params: Params }) {
  const { navlinks } = await params;

  return (
    <div className="not-available navlink">
      The {`${navlinks}`} page is not currently available.
    </div>
  );
}
