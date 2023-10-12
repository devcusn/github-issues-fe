import { Metadata } from "next";

import {
  getGithubIssues,
  getGithubRepoDetail,
  getGithupRepoAllAuthors,
  getGithupRepoAllLabels,
} from "@/services/endpoints";
import IssuesTable from "./components/IssuesTable/IssuesTable";
import Pagination from "../components/Pagination/Pagination";
import { NextRequest } from "next/server";

export const metadata: Metadata = {
  title: "Issues · facebook/react",
  description: "...",
};

const IssuesPage = async (request: NextRequest) => {
  const page = Number(request?.searchParams.page);
  const issues = await getGithubIssues({ page });
  const repodetails = await getGithubRepoDetail();
  const labels = await getGithupRepoAllLabels();
  const authors = await getGithupRepoAllAuthors();
  return (
    <>
      <IssuesTable
        data={issues}
        repoDetail={repodetails}
        labels={labels}
        authors={authors}
      />
      <Pagination
        pages={Math.ceil(Number(repodetails.open_issues_count) / 30)}
        currentPage={page || 1}
      />
    </>
  );
};
export default IssuesPage;
