import { Metadata } from "next";

import { getGithubIssues } from "@/services/endpoints";
import IssuesTable from "./components/IssuesTable/IssuesTable";
import Pagination from "../components/Pagination/Pagination";

export const metadata: Metadata = {
  title: "Issues · facebook/react",
  description: "...",
};

const IssuesPage = async () => {
  const res = await getGithubIssues();

  return (
    <>
      <IssuesTable data={res} />
      <Pagination pages={45} currentPage={1} />
    </>
  );
};
export default IssuesPage;
