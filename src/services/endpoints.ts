import {
  GET_GITHUB_ISSUES,
  GET_GITHUB_ISSUES_COMMENTS,
  GET_GITHUB_ISSUES_DETAIL,
  GET_GITHUB_REPO_ALL_LABELS,
  GET_GITHUB_REPO_DETAIL,
  GET_GITHUB_REPO_ALL_AUTHORS,
} from "./constant";
import {
  GithubGetIssueCommentServiceParams,
  GithubGetIssueDetailServiceParams,
  GithubLabel,
  GithubRepoDetail,
  GithubUser,
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
export const getGithubIssues = async (query: string) => {
  try {
    const res = await fetch(GET_GITHUB_ISSUES(query));
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

export const getGithupRepoAllAuthors = async (): Promise<Array<GithubUser>> => {
  try {
    const res = await fetch(GET_GITHUB_REPO_ALL_AUTHORS());
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
};
