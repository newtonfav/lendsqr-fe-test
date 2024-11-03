import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "@/components/filter";

describe("Filter Component", () => {
  it("renders the label and input correctly for text type", () => {
    render(
      <Filter
        label="Text Filter"
        name="textFilter"
        type="text"
        placeholder="Enter text"
        onChange={jest.fn()}
      />
    );

    expect(screen.getByText("Text Filter")).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("name", "textFilter");
  });

  it("renders the label and select element correctly for select type", () => {
    const options = ["Option 1", "Option 2", "Option 3"];
    render(
      <Filter
        label="Select Filter"
        name="selectFilter"
        type="select"
        options={options}
        onChange={jest.fn()}
      />
    );

    expect(screen.getByText("Select Filter")).toBeInTheDocument();

    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute("name", "selectFilter");

    // Check if all options are rendered
    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it("calls onChange function when input value changes", () => {
    const handleChange = jest.fn();
    render(
      <Filter
        label="Text Filter"
        name="textFilter"
        type="text"
        placeholder="Enter text"
        onChange={handleChange}
      />
    );

    const input = screen.getByPlaceholderText("Enter text");
    fireEvent.change(input, { target: { value: "New text" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("calls onChange function when select value changes", () => {
    const handleChange = jest.fn();
    const options = ["Option 1", "Option 2", "Option 3"];
    render(
      <Filter
        label="Select Filter"
        name="selectFilter"
        type="select"
        options={options}
        onChange={handleChange}
      />
    );

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "Option 1" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
