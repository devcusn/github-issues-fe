import { GET_GITHUB_ISSUES } from "./constant";

export const getGithubIssues = async () => {
  try {
    const res = await fetch(GET_GITHUB_ISSUES);
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
};
