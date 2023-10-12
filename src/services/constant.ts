export const GET_GITHUB_ISSUES = (page: number = 0) =>
  `https://api.github.com/repos/facebook/react/issues?page=${page}`;
