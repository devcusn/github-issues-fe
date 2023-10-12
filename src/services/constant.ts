export const GET_GITHUB_ISSUES = (query: string) =>
  `https://api.github.com/repos/facebook/react/issues?${query}`;
export const GET_GITHUB_ISSUES_DETAIL = (issue: string) =>
  `https://api.github.com/repos/facebook/react/issues/${issue}`;
export const GET_GITHUB_ISSUES_COMMENTS = (issue: string) =>
  `https://api.github.com/repos/facebook/react/issues/${issue}/comments`;
export const GET_GITHUB_REPO_DETAIL = () =>
  "https://api.github.com/repos/facebook/react";
export const GET_GITHUB_REPO_ALL_LABELS = () =>
  "https://api.github.com/repos/facebook/react/labels";
export const GET_GITHUB_REPO_ALL_AUTHORS = () =>
  `https://api.github.com/repos/facebook/react/contributors`;
