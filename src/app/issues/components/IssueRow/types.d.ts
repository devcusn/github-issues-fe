import { GithubIssue } from "@/services/types";

export type IssueRowProps = {
  issue: GithubIssue;
  icon: React.ReactElement;
};

export type IssueRowLabelsProps = {
  issue: GithubIssue;
};
export type IssueRowAssignesProps = {
  issue: GithubIssue;
};
