import { Metadata } from "next";

import { getGithubIssues } from "@/services/endpoints";
import IssuesTable from "./components/IssuesTable/IssuesTable";
import Pagination from "../components/Pagination/Pagination";
import { NextRequest } from "next/server";

export const metadata: Metadata = {
  title: "Issues · facebook/react",
  description: "...",
};

const IssuesPage = async (request: NextRequest) => {
  const page = Number(request?.searchParams.page);

  const res = await getGithubIssues({ page });

  return (
    <>
      <IssuesTable data={res} />
      <Pagination pages={45} currentPage={page} />
    </>
  );
};
export default IssuesPage;
