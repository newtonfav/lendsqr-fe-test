import { render, screen } from "@testing-library/react";
import Page from "@/users/[userId]/loans/page";

describe("Loans details page", () => {
  it('has the class "not-available" ', () => {
    render(<Page />);

    expect(screen.getByTestId("loans")).toHaveClass("not-available");
  });
});
