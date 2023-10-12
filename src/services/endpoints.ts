import {
  GET_GITHUB_ISSUES,
  GET_GITHUB_ISSUES_COMMENTS,
  GET_GITHUB_ISSUES_DETAIL,
} from "./constant";
import { NextRequest } from "next/server";
import {
  GithubGetIssueCommentServiceParams,
  GithubGetIssueDetailServiceParams,
} from "./types";

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
