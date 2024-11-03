import { render, screen } from "@testing-library/react";
import Page from "@/users/[userId]/documents/page";

describe("Documents details page", () => {
  it('has the class "not-available" ', () => {
    render(<Page />);

    expect(screen.getByTestId("documents")).toHaveClass("not-available");
  });
});
