import {
  GET_GITHUB_ISSUES,
  GET_GITHUB_ISSUES_COMMENTS,
  GET_GITHUB_ISSUES_DETAIL,
  GET_GITHUB_REPO_ALL_LABELS,
  GET_GITHUB_REPO_DETAIL,
} from "./constant";
import {
  GithubGetIssueCommentServiceParams,
  GithubGetIssueDetailServiceParams,
  GithubLabel,
  GithubRepoDetail,
} from "./types";

export const getGithubRepoDetail = async (): Promise<GithubRepoDetail> => {
  try {
    const res = await fetch(GET_GITHUB_REPO_DETAIL());
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
};
export const getGithubIssues = async ({ page = 1 }) => {
  try {
    const res = await fetch(GET_GITHUB_ISSUES(page));
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
};

export const getGithubIssuesDetail = async ({
  issue,
}: GithubGetIssueCommentServiceParams) => {
  try {
    const res = await fetch(GET_GITHUB_ISSUES_DETAIL(issue));
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
};

export const getGithubIssuesDetailComments = async ({
  issue,
}: GithubGetIssueDetailServiceParams) => {
  try {
    const res = await fetch(GET_GITHUB_ISSUES_COMMENTS(issue));
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
};

export const getGithupRepoAllLabels = async (): Promise<Array<GithubLabel>> => {
  try {
    const res = await fetch(GET_GITHUB_REPO_ALL_LABELS());
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
};
