import { render } from "@testing-library/react";
import { redirect } from "next/navigation";
import Page from "@/app/page";

jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

describe("Page Component", () => {
  it("should call redirect with '/login'", () => {
    render(<Page />);

    // Check that `redirect` is called with the correct argument
    expect(redirect).toHaveBeenCalledWith("/login");
  });
});
