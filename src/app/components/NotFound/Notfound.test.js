import React from "react";
import { render } from "@testing-library/react";
import NotFound from "./NotFound";

describe("NotFound Component", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<NotFound />);

    const notFoundElement = getByText("No results matched your search.");
    expect(notFoundElement).toBeInTheDocument();
  });
});
