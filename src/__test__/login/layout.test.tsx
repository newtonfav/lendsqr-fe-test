import Layout from "@/app/login/layout";
import { render, screen } from "@testing-library/react";

describe("Layout component", () => {
  it("renders the layout page correctly", () => {
    render(
      <Layout>
        <div data-testid="child-element">Test Child</div>
      </Layout>
    );

    const childElement = screen.getByTestId("child-element");
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent("Test Child");
  });
});
