/* eslint-disable react/display-name */
import { render, screen } from "@testing-library/react";
import UsersTableSkeleton from "@/components/skeleton-loaders/users-table-skeleton";

jest.mock("../../../app/assets/icons/threedots.tsx", () => () => (
  <svg data-testid="ThreeDots" />
));

describe("UsersTableSkeleton Component", () => {
  it("renders the skeleton rows correctly", () => {
    render(<UsersTableSkeleton />);

    const skeletonRows = screen.queryAllByTestId("tablerow-skeleton");
    expect(skeletonRows.length).toBe(8);

    skeletonRows.forEach((row) => {
      expect(
        row.querySelector(".tablerow__organisation span")
      ).toHaveTextContent("organisation");
      expect(row.querySelector(".tablerow__username span")).toHaveTextContent(
        "firstName"
      );
      expect(row.querySelector(".tablerow__email")).toHaveTextContent("email");
      expect(row.querySelector(".tablerow__phone")).toHaveTextContent("phone");
      expect(row.querySelector(".tablerow__status")).toHaveTextContent(
        "userStatus"
      );

      expect(screen.getAllByTestId("ThreeDots")).toHaveLength(8);
    });
  });
});
