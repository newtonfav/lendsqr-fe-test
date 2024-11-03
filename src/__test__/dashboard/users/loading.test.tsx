import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "@/app/dashboard/users/loading";

describe("Loading Component", () => {
  it("renders loading state correctly", () => {
    render(<Loading />);

    expect(
      screen.getByRole("heading", { name: /User Details/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Blacklist User/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Activate User/i })
    ).toBeInTheDocument();

    expect(screen.getByText("firstName")).toBeInTheDocument();
    expect(screen.getByText("default")).toBeInTheDocument();

    expect(screen.getByText("User's Tier")).toBeInTheDocument();

    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("Providus Bank")).toBeInTheDocument();

    const navItems = [
      "General Details",
      "Documents",
      "Bank Details",
      "Loans",
      "Savings",
      "App and System",
    ];
    navItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
