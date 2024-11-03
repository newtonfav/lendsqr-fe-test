import React from "react";
import { render, screen } from "@testing-library/react";
import Error from "@/app/dashboard/error";

describe("Error Component", () => {
  it("renders the error message", () => {
    render(<Error />);

    expect(screen.getByText("Something went wrong!")).toBeInTheDocument();
    expect(screen.getByTestId("error")).toHaveClass("error");
  });
});
