import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "@/components/input";

describe("Input Component", () => {
  it("renders the input with the correct placeholder", () => {
    render(
      <Input
        placeholder="Enter your text"
        value=""
        setValue={jest.fn()}
        type="text"
        renderError={false}
      />
    );

    const inputElement = screen.getByPlaceholderText("Enter your text");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
  });

  it("calls setValue function on input change", () => {
    const handleChange = jest.fn();
    render(
      <Input
        placeholder="Enter your text"
        value=""
        setValue={handleChange}
        type="text"
        renderError={false}
      />
    );

    const inputElement = screen.getByPlaceholderText("Enter your text");
    fireEvent.change(inputElement, { target: { value: "New value" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("renders the label when provided", () => {
    render(
      <Input
        placeholder="Enter your text"
        value=""
        setValue={jest.fn()}
        type="text"
        label="Input Label"
        renderError={false}
      />
    );

    const labelElement = screen.getByText("Input Label");
    expect(labelElement).toBeInTheDocument();
  });

  it("toggles password visibility when the show button is clicked", () => {
    render(
      <Input
        placeholder="Enter your password"
        value="password123"
        setValue={jest.fn()}
        type="password"
        renderError={false}
      />
    );

    const inputElement = screen.getByPlaceholderText("Enter your password");
    expect(inputElement).toHaveAttribute("type", "password");

    const toggleButton = screen.getByRole("button", { name: /show/i });
    fireEvent.click(toggleButton);

    expect(inputElement).toHaveAttribute("type", "text");

    fireEvent.click(toggleButton);
    expect(inputElement).toHaveAttribute("type", "password");
  });

  it("renders the error message when renderError is true and error is present", () => {
    render(
      <Input
        placeholder="Enter your text"
        value=""
        setValue={jest.fn()}
        type="text"
        error={true}
        errorMessage="This is an error message"
        renderError={true}
      />
    );

    const errorMessage = screen.getByText("This is an error message");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass("visible");
  });

  it("does not render the error message when renderError is false", () => {
    render(
      <Input
        placeholder="Enter your text"
        value=""
        setValue={jest.fn()}
        type="text"
        error={true}
        errorMessage="This is an error message"
        renderError={false}
      />
    );

    const errorMessage = screen.queryByText("This is an error message");
    expect(errorMessage).not.toBeInTheDocument();
  });
});
