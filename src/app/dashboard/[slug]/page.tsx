import React from "react";

type Params = Promise<{ slug: string }>;

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;

  return (
    <div data-testid="not-available navlink" className="not-available navlink">
      The {`${slug}`} page is not currently available.
    </div>
  );
}
