import { render, screen } from "@testing-library/react";
import Profile from "@/components/profile";

describe("Profile Component", () => {
  it("renders the profile image and name", () => {
    render(<Profile />);

    const profileImage = screen.getByAltText("adediji profile pic");
    expect(profileImage).toBeInTheDocument();

    const profileName = screen.getByText("Adedeji");
    expect(profileName).toBeInTheDocument();
  });
});
