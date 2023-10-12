import { GET_GITHUB_ISSUES } from "./constant";
import { NextRequest } from "next/server";

export const getGithubIssues = async ({ page = 1 }) => {
  try {
    const res = await fetch(GET_GITHUB_ISSUES(page));
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
};
