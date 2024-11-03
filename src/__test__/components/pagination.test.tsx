import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "@/components/pagination";

describe("Pagination Component", () => {
  it("disables the left arrow when on the first page", () => {
    render(
      <Pagination totalPages={5} initialPage={1} onPageChange={jest.fn()} />
    );

    const leftArrow = screen.getByTestId("left-arrow-pagination");
    expect(leftArrow).toHaveAttribute("aria-disabled", "true");
  });

  it("disables the right arrow when on the last page", () => {
    render(
      <Pagination totalPages={5} initialPage={5} onPageChange={jest.fn()} />
    );

    const rightArrow = screen.getByTestId("right-arrow-pagination");
    expect(rightArrow).toHaveAttribute("aria-disabled", "true");
  });

  it("navigates to the next page when the right arrow is clicked", () => {
    const mockOnPageChange = jest.fn();
    render(
      <Pagination
        totalPages={5}
        initialPage={2}
        onPageChange={mockOnPageChange}
      />
    );

    const rightArrow = screen.getByTestId("right-arrow-pagination");
    fireEvent.click(rightArrow!);

    expect(mockOnPageChange).toHaveBeenCalledWith("page", "3");
  });

  it("navigates to the previous page when the left arrow is clicked", () => {
    const mockOnPageChange = jest.fn();
    render(
      <Pagination
        totalPages={5}
        initialPage={3}
        onPageChange={mockOnPageChange}
      />
    );

    const leftArrow = screen.getByTestId("left-arrow-pagination");
    fireEvent.click(leftArrow!);

    expect(mockOnPageChange).toHaveBeenCalledWith("page", "2");
  });
});
