export const createPaginationItems = (pages: number, selectedPage: number) => {
  if (selectedPage < 11) {
    return [...Array.from({ length: 10 }, (_, i) => i + 1), "...", pages];
  }
  if (selectedPage < pages - 5) {
    return [
      1,
      2,
      "...",
      selectedPage - 1,
      selectedPage - 2,
      selectedPage,
      selectedPage + 1,
      selectedPage + 2,
      "...",
      pages - 1,
      pages,
    ];
  }
  return [
    1,
    2,
    "...",
    ...Array.from({ length: 5 }, (_, i) => pages - i).reverse(),
  ];
};
