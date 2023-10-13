import { Metadata } from "next";

import {
  getGithubIssues,
  getGithubRepoDetail,
  getGithupRepoAllAuthors,
  getGithupRepoAllLabels,
} from "@/services/endpoints";
import { objectToQueryString } from "@/helper/query";

import IssuesTable from "./components/IssuesTable/IssuesTable";
import Pagination from "../components/Pagination/Pagination";

export const metadata: Metadata = {
  title: "Issues · facebook/react",
  description: "...",
};

const IssuesPage = async (request: {
  searchParams: { page: string; creator: string };
}) => {
  const page = Number(request.searchParams.page) || 1;
  const name = request.searchParams.creator;
  const issues = await getGithubIssues(
    objectToQueryString(request?.searchParams)
  );
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
      {!name && (
        <Pagination
          pages={Number(repodetails.open_issues_count)}
          perPage={30}
          currentPage={page || 1}
        />
      )}
    </>
  );
};

export default IssuesPage;
