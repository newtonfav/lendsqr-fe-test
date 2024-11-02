import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "@/app/login/page";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Page component", () => {
  let push: jest.Mock;

  beforeEach(() => {
    push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });
  });

  it("renders the Page component correctly", () => {
    render(<Page />);

    expect(screen.getByTestId("login__left")).toBeInTheDocument();
    expect(screen.getByTestId("login__right")).toBeInTheDocument();
    expect(screen.getByTestId("login__left--avatar")).toBeInTheDocument();
  });

  it("shows an error message when email is invalid", () => {
    render(<Page />);

    const emailInput = screen.getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "favouroghenekowho" } });

    const loginButton = screen.getByText("Log in");
    fireEvent.click(loginButton);

    // Check if the email error message is displayed
    expect(screen.getByText("Enter a valid email")).toBeInTheDocument();
  });

  it("shows an error message when password is invalid", () => {
    render(<Page />);

    const passwordInput = screen.getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: "short" } });

    const loginButton = screen.getByText("Log in");
    fireEvent.click(loginButton);

    // Check if the password error message is displayed
    expect(
      screen.getByText("Password must be at least 8 characters!")
    ).toBeInTheDocument();
  });

  it("navigates to the dashboard when valid email and password are provided", () => {
    render(<Page />);

    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    fireEvent.change(emailInput, {
      target: { value: "oghenekowho@example.com" },
    });
    fireEvent.change(passwordInput, { target: { value: "password12234" } });

    const loginButton = screen.getByText("Log in");
    fireEvent.click(loginButton);

    // Check if the router push method is called to navigate to the dashboard
    expect(push).toHaveBeenCalledWith("/dashboard/users");
  });
});
