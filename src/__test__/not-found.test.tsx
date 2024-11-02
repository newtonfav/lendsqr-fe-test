import { render, screen } from "@testing-library/react";
import NotFound from "@/app/not-found";

describe("Not found component", () => {
  it("It should have the class 'not found'", () => {
    render(<NotFound />);

    const textElement = screen.getByText("This page does not exist.");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass("not-found");
  });
});
