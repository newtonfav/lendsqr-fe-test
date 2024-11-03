import { render, screen } from "@testing-library/react";
import UserTableRow from "@/components/user-table-row";
import { getStatusFromApiValue } from "../../app/utils/functions/getUserFieldFromNumericValue";

jest.mock("../../app/utils/functions/getUserFieldFromNumericValue", () => ({
  getStatusFromApiValue: jest.fn(),
}));

describe("UserTableRow Component", () => {
  const mockUser = {
    organisation: "Org 1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    dateJoined: "2024-01-01",
    status: "1",
    userId: "123",
  };

  beforeEach(() => {
    (getStatusFromApiValue as jest.Mock).mockReturnValue("active");
  });

  it("renders user details correctly", () => {
    render(<UserTableRow {...mockUser} />);

    expect(screen.getByText("Org 1")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    expect(screen.getByText("123-456-7890")).toBeInTheDocument();
    expect(screen.getByText("active")).toBeInTheDocument();
  });
});
