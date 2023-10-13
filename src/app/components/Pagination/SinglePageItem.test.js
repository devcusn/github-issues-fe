import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SinglePageItem from "./SinglePageItem";

const mockPage = "1";
const mockSelected = false;

test("renders SinglePageItem component", () => {
  render(<SinglePageItem page={mockPage} isSelected={mockSelected} />);

  const pageElement = screen.getByText(mockPage);
  expect(pageElement).toBeInTheDocument();

  const linkElement = screen.getByRole("link");
  expect(linkElement).toHaveAttribute("href", "/issues?page=TestPage");

  expect(linkElement).not.toHaveClass("single_page_item__selected");
});

test("renders SinglePageItem component when selected", () => {
  render(<SinglePageItem page={mockPage} isSelected={true} />);

  const linkElement = screen.getByRole("link");
  expect(linkElement).toHaveClass("single_page_item__selected");
});

test("renders SinglePageItem component with string page", () => {
  render(<SinglePageItem page="TestPage" isSelected={mockSelected} />);

  const linkElement = screen.getByRole("link");
  expect(linkElement).toHaveAttribute("href", "");
});

test("handles click event correctly", () => {
  const onClick = jest.fn();
  render(
    <SinglePageItem
      page={mockPage}
      isSelected={mockSelected}
      onClick={onClick}
    />
  );

  userEvent.click(screen.getByRole("link"));

  expect(onClick).toHaveBeenCalledTimes(1);
});
