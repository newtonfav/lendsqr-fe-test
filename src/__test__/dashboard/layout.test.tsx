import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "@/app/dashboard/layout";

jest.mock("../../app/components/navbar.tsx", () => {
  const MockNavBar = () => <div>Mock NavBar</div>;
  MockNavBar.displayName = "NavBar";
  return MockNavBar;
});

jest.mock("../../app/components/sidebar.tsx", () => {
  const MockSidebar = () => <div>Mock Sidebar</div>;
  MockSidebar.displayName = "Sidebar";
  return MockSidebar;
});

describe("Layout Component", () => {
  it("renders NavBar and Sidebar components", () => {
    render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    );

    expect(screen.getByText("Mock NavBar")).toBeInTheDocument();
    expect(screen.getByText("Mock Sidebar")).toBeInTheDocument();
  });

  it("renders its children correctly", () => {
    render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    );

    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});
