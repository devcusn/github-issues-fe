export const createPaginationItems = (pages: number, selectedPage: number) => {
  if (pages < 11) {
    return Array.from({ length: 10 }, (_, i) => i + 1);
  } else {
    return [
      Array.from({ length: 4 }, (_, i) => i + 1),
      "...",
      pages - 1,
      pages,
    ];
  }
};
