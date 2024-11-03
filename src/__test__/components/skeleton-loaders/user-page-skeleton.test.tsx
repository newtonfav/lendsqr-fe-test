import { render, screen } from "@testing-library/react";
import UserPageSkeleton from "@/components/skeleton-loaders/user-page-skeleton";

describe("UserPageSkeleton Component", () => {
  it("renders the details container", () => {
    render(<UserPageSkeleton />);

    expect(screen.getByTestId("details_container")).toBeInTheDocument();
  });
});
