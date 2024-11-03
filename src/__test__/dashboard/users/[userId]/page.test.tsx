import React from "react";
import { render, screen } from "@testing-library/react";
import Page from "@/app/dashboard/users/[userId]/page";
import { useUser } from "@/src/app/contexts/user-context";

jest.mock("../../../../app/contexts/user-context.tsx");

describe("Page Component", () => {
  beforeEach(() => {
    (useUser as jest.Mock).mockReturnValue({
      profile: {
        firstName: "favour",
        lastName: "oghenekowho",
        phoneNumber: "1234567890",
        email: "favour@example.com",
        bvn: "12345",
        children: "2",
      },
      education: {
        employmentStatus: "Employed",
        sector: "Finance",
        duration: "2 years",
        officeEmail: "favour@office.com",
        monthlyIncome: [50000, 60000],
        loanRepayment: 20000,
      },
      socials: {
        twitter: "@johndoe",
        facebook: "johndoe.fb",
        instagram: "johndoe_ig",
      },
      guarantor: {
        firstName: "Jane",
        lastName: "Doe",
        email: "johndoe@email.com",
      },
    });
  });

  it("renders user details correctly", () => {
    render(<Page />);

    expect(screen.getByText("Personal Information")).toBeInTheDocument();
    expect(screen.getByText("bvn")).toBeInTheDocument();
    expect(screen.getByText("12345")).toBeInTheDocument();

    expect(screen.getByText("children")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();

    expect(screen.getByText("Education and Employment")).toBeInTheDocument();
    expect(screen.getByText("employment status")).toBeInTheDocument();
    expect(screen.getByText("Employed")).toBeInTheDocument();
    expect(screen.getByText("sector of employment")).toBeInTheDocument();
    expect(screen.getByText("Finance")).toBeInTheDocument();
    expect(screen.getByText("duration of employment")).toBeInTheDocument();
    expect(screen.getByText("2 years")).toBeInTheDocument();
    expect(screen.getByText("monthly income")).toBeInTheDocument();

    expect(screen.getByText("Socials")).toBeInTheDocument();
    expect(screen.getByText("twitter")).toBeInTheDocument();
    expect(screen.getByText("@johndoe")).toBeInTheDocument();
    expect(screen.getByText("facebook")).toBeInTheDocument();
    expect(screen.getByText("johndoe.fb")).toBeInTheDocument();
    expect(screen.getByText("instagram")).toBeInTheDocument();
    expect(screen.getByText("johndoe_ig")).toBeInTheDocument();

    expect(screen.getByText("Guarantor")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
  });
});
