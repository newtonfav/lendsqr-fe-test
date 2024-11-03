import { render, screen, fireEvent } from "@testing-library/react";
import PageLimit from "@/components/page-limit";

describe("PageLimit Component", () => {
  it("renders the select dropdown with default value", () => {
    const mockOnPageLimitChange = jest.fn();

    render(<PageLimit onPageLimitChange={mockOnPageLimitChange} />);

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveValue("10");
  });

  it("renders all the options correctly", () => {
    const mockOnPageLimitChange = jest.fn();

    render(<PageLimit onPageLimitChange={mockOnPageLimitChange} />);

    const options = screen.getAllByRole("option");
    const optionValues = options.map((option) => option.textContent);

    expect(optionValues).toEqual(["1", "5", "10", "20"]);
  });

  it("calls onPageLimitChange with the correct parameters when a new value is selected", () => {
    const mockOnPageLimitChange = jest.fn();

    render(<PageLimit onPageLimitChange={mockOnPageLimitChange} />);

    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "5" } });

    expect(selectElement).toHaveValue("5");
    expect(mockOnPageLimitChange).toHaveBeenCalledTimes(1);
    expect(mockOnPageLimitChange).toHaveBeenCalledWith("limit", "5");
  });
});
