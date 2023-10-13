import React from "react";
import { render } from "@testing-library/react";
import SinglePageItem from "./SinglePageItem";

describe("SinglePageItem Component", () => {
  it("renders with correct props", () => {
    const { getByText } = render(
      <SinglePageItem page={1} isSelected={false} />
    );

    const singlePageItem = getByText(1);
    expect(singlePageItem).toBeInTheDocument();
  });

  it("renders without crashing", () => {
    const { getByText } = render(<SinglePageItem page={1} isSelected={true} />);

    const singlePageItem = getByText("1");
    expect(singlePageItem).toBeInTheDocument();
  });
});
