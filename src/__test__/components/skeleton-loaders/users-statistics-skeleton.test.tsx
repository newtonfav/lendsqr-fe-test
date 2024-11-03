/* eslint-disable react/display-name */
import { render, screen } from "@testing-library/react";
import UsersStaticticsSkeleton from "@/components/skeleton-loaders/users-statictics-skeleton";

// Mock the icon components
jest.mock("../../../app/assets/icons/dashboard-users.tsx", () => () => (
  <svg data-testid="DashboardUsers" />
));
jest.mock("../../../app/assets/icons/active-users.tsx", () => () => (
  <svg data-testid="ActiveUsers" />
));
jest.mock("../../../app/assets/icons/users-with-loans.tsx", () => () => (
  <svg data-testid="UsersWithoans" />
));
jest.mock("../../../app/assets/icons/users-with-savings.tsx", () => () => (
  <svg data-testid="UsersWithSavings" />
));

describe("UsersStaticticsSkeleton Component", () => {
  it("renders all user statistics with correct icons and names", () => {
    render(<UsersStaticticsSkeleton />);

    expect(screen.getByTestId("DashboardUsers")).toBeInTheDocument();
    expect(screen.getByText("users")).toBeInTheDocument();

    expect(screen.getByTestId("ActiveUsers")).toBeInTheDocument();
    expect(screen.getByText("active users")).toBeInTheDocument();

    expect(screen.getByTestId("UsersWithoans")).toBeInTheDocument();
    expect(screen.getByText("users with loans")).toBeInTheDocument();

    expect(screen.getByTestId("UsersWithSavings")).toBeInTheDocument();
    expect(screen.getByText("users with savings")).toBeInTheDocument();

    const skeletons = screen.getAllByText("0");
    expect(skeletons.length).toBe(4);
  });
});
