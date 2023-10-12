import {
  GetGithubIssueResponse,
  GithubLabel,
  GithubRepoDetail,
} from "@/services/types";

export type IssuesTableProps = {
  data: GetGithubIssueResponse;
  repoDetail: GithubRepoDetail;
  labels: GithubLabel;
};

export type IssueTableHeaderProps = {
  labels: Array<GithubLabel>;
  repoDetail: GithubRepoDetail;
};
