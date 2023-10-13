// Import necessary dependencies for testing
import { render, screen } from "@testing-library/react";
import Home from "./page";

jest.mock(
  "next/link",
  () =>
    ({ children }) =>
      children
);

describe("Home Component", () => {
  it("renders home page with correct content", () => {
    render(<Home />);

    const mainTitle = screen.getByText(
      "Github Issues And Detail Page Frontend Clone"
    );
    expect(mainTitle).toBeInTheDocument();

    const goIssuesLink = screen.getByText("Go Issues");
    expect(goIssuesLink).toHaveAttribute("href", "/issues");

    const allRoutesTitle = screen.getByText("All Routes");
    expect(allRoutesTitle).toBeInTheDocument();

    const publicApisTitle = screen.getByText("Public Github APIs");
    expect(publicApisTitle).toBeInTheDocument();
  });
});
