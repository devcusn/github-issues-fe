// pagination.test.js

import { createPaginationItems } from "./pagination"; // Update with the correct path

describe("createPaginationItems", () => {
  test("it should return an array more than 11", () => {
    const pages = 20;
    const selectedPage = 5;

    const result = createPaginationItems(pages, selectedPage);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "...", 20]);
  });

  test("it should return an array ", () => {
    const pages = 50;
    const selectedPage = 45;

    const result = createPaginationItems(pages, selectedPage);

    expect(result).toEqual([1, 2, "...", 46, 47, 48, 49, 50]);
  });

  test("it should return an array ", () => {
    const pages = 10;
    const selectedPage = 9;

    const result = createPaginationItems(pages, selectedPage);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
