/* eslint-disable react/display-name */
import { render, screen } from "@testing-library/react";
import UsersTableFilter from "@/components/users-table-filter";
import { useFilter } from "@/src/app/contexts/table-filter-context";

jest.mock("../../app/contexts/table-filter-context.tsx", () => ({
  useFilter: jest.fn(),
}));

jest.mock("../../app/components/user-table-row.tsx", () => () => (
  <div data-testid="user-table-row">Mocked UserTableRow</div>
));

describe("UsersTableFilter Component", () => {
  it("renders 'User Not Found' when there is no filtered data", () => {
    // Set up the mock for useFilter to return an empty array
    (useFilter as jest.Mock).mockReturnValue({ filteredData: [] });

    render(<UsersTableFilter />);

    // Check if the 'User Not Found' message is displayed
    expect(screen.getByText("User Not Found")).toBeInTheDocument();
  });

  it("renders UserTableRow components when filtered data is present", () => {
    // Mock filtered data
    const mockFilteredData = [
      {
        organisation: "Org1",
        profile: {
          email: "user1@example.com",
          phoneNumber: "1234567890",
          lastName: "Doe",
        },
        createdAt: "2024-01-01",
        firstName: "John",
        status: "active",
        id: "1",
      },
      {
        organisation: "Org2",
        profile: {
          email: "user2@example.com",
          phoneNumber: "0987654321",
          lastName: "Smith",
        },
        createdAt: "2024-02-01",
        firstName: "Jane",
        status: "inactive",
        id: "2",
      },
    ];

    // Set up the mock for useFilter to return the mock filtered data
    (useFilter as jest.Mock).mockReturnValue({
      filteredData: mockFilteredData,
    });

    render(<UsersTableFilter />);

    const userTableRows = screen.getAllByTestId("user-table-row");
    expect(userTableRows).toHaveLength(mockFilteredData.length);
  });
});
