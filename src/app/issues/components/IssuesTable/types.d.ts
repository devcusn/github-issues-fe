import {
  GetGithubIssueResponse,
  GithubLabel,
  GithubRepoDetail,
  GithubUser,
} from "@/services/types";

export type IssuesTableProps = {
  data: GetGithubIssueResponse;
  repoDetail: GithubRepoDetail;
  labels: Array<GithubLabel>;
  authors: Array<GithubUser>;
};

export type IssueTableHeaderProps = {
  labels: Array<GithubLabel>;
  authors: Array<GithubUser>;
  repoDetail: GithubRepoDetail;
};

export type AutherTitleProps = {
  user: GithubUser;
};
export type LabelTitleProps = {
  label: GithubLabel;
};
