import { Metadata } from "next";
import { NextRequest } from "next/server";

import {
  getGithubIssues,
  getGithubRepoDetail,
  getGithupRepoAllAuthors,
  getGithupRepoAllLabels,
} from "@/services/endpoints";

import IssuesTable from "./components/IssuesTable/IssuesTable";
import Pagination from "../components/Pagination/Pagination";

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
        pages={Number(repodetails.open_issues_count)}
        perPage={30}
        currentPage={page || 1}
      />
    </>
  );
};

export default IssuesPage;
