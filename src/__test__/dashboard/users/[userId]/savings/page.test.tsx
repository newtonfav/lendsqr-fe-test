import { render, screen } from "@testing-library/react";
import Page from "@/users/[userId]/savings/page";

describe("Savings details page", () => {
  it('has the class "not-available" ', () => {
    render(<Page />);

    expect(screen.getByTestId("savings")).toHaveClass("not-available");
  });
});
