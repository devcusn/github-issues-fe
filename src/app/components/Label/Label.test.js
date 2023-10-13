import React from "react";
import { render } from "@testing-library/react";
import Label from "./Label";

describe("Label Component", () => {
  it("renders without crashing", () => {
    const { getByText } = render(
      <Label variant="random" title="Test Label" color="#ff0000" />
    );
    const labelElement = getByText("Test Label");
    expect(labelElement).toBeInTheDocument();
  });

  it("applies correct classes and styles", () => {
    const { container } = render(
      <Label variant="success" title="Test Label" color="#cccccc" />
    );

    expect(container.firstChild).toHaveClass("success");
    expect(container.firstChild).toHaveClass("label");

    expect(container.firstChild).toHaveStyle({ backgroundColor: "#cccccc" });
  });
});
