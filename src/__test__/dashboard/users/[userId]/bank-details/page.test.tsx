import { render, screen } from "@testing-library/react";
import Page from "@/users/[userId]/bank-details/page";

describe("Bnk details page", () => {
  it('has the class "not-available" ', () => {
    render(<Page />);

    expect(screen.getByTestId("not-available")).toHaveClass("not-available");
  });
});
