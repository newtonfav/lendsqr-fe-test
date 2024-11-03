import { render, screen } from "@testing-library/react";
import NavLink from "@/components/navlink";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("NavLink Component", () => {
  it("renders the link with the correct href", () => {
    (usePathname as jest.Mock).mockReturnValue("/dashboard");

    render(
      <NavLink href="/dashboard" exact={true}>
        Dashboard
      </NavLink>
    );

    const linkElement = screen.getByRole("link", { name: "Dashboard" });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/dashboard");
  });

  it("applies the active class when the link is active (exact match)", () => {
    (usePathname as jest.Mock).mockReturnValue("/dashboard");

    render(
      <NavLink href="/dashboard" exact={true} activeClassName="active">
        Dashboard
      </NavLink>
    );

    const linkElement = screen.getByRole("link", { name: "Dashboard" });
    expect(linkElement).toHaveClass("active");
  });

  it("does not apply the active class when the link is not active (exact match)", () => {
    (usePathname as jest.Mock).mockReturnValue("/profile");

    render(
      <NavLink href="/dashboard" exact={true} activeClassName="active">
        Dashboard
      </NavLink>
    );

    const linkElement = screen.getByRole("link", { name: "Dashboard" });
    expect(linkElement).not.toHaveClass("active");
  });

  it("applies the active class when the link is active (non-exact match)", () => {
    (usePathname as jest.Mock).mockReturnValue("/dashboard/settings");

    render(
      <NavLink href="/dashboard" exact={false} activeClassName="active">
        Dashboard
      </NavLink>
    );

    const linkElement = screen.getByRole("link", { name: "Dashboard" });
    expect(linkElement).toHaveClass("active");
  });

  it("does not apply the active class when the link is not active (non-exact match)", () => {
    (usePathname as jest.Mock).mockReturnValue("/profile");

    render(
      <NavLink href="/dashboard" exact={false} activeClassName="active">
        Dashboard
      </NavLink>
    );

    const linkElement = screen.getByRole("link", { name: "Dashboard" });
    expect(linkElement).not.toHaveClass("active");
  });
});
