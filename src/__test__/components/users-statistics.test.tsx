import { render, screen, waitFor } from "@testing-library/react";
import UsersStatistics from "@/components/users-statistics";

// Mock the fetch function to simulate API response
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          users: "1500",
          activeUsers: "1200",
          usersWithLoans: 300,
          usersWithSavings: 700,
          id: "1",
        },
      ]),
  })
) as jest.Mock;

describe("UsersStatistics Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders user statistics correctly after fetching data", async () => {
    render(await UsersStatistics());

    // Wait for the component to finish rendering
    await waitFor(() => {
      expect(screen.getByText("users")).toBeInTheDocument();
      expect(screen.getByText("1,500")).toBeInTheDocument();
      expect(screen.getByText("active users")).toBeInTheDocument();
      expect(screen.getByText("1,200")).toBeInTheDocument();
      expect(screen.getByText("users with loans")).toBeInTheDocument();
      expect(screen.getByText("300")).toBeInTheDocument();
      expect(screen.getByText("users with savings")).toBeInTheDocument();
      expect(screen.getByText("700")).toBeInTheDocument();
    });

    // Check if fetch was called
    expect(global.fetch).toHaveBeenCalledWith(`${process.env.URL}/statistics`);
  });
});
