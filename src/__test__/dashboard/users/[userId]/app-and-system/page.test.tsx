import { render, screen } from "@testing-library/react";
import Page from "@/users/[userId]/app-and-system/page";

describe("App and system details page", () => {
  it('has the class "not-available" ', () => {
    render(<Page />);

    expect(screen.getByTestId("not-available-app-and-system")).toHaveClass(
      "not-available"
    );
  });
});
