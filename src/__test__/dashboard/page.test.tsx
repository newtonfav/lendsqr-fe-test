import Page from "@/src/app/dashboard/page";
import { render } from "@testing-library/react";
import { redirect } from "next/navigation";

jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

describe("Dashboard Page Component", () => {
  it("redirects users to the users page", () => {
    render(<Page />);

    expect(redirect).toHaveBeenCalledWith("/dashboard/users");
  });
});
