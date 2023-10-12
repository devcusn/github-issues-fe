import { getGithubIssues } from "@/services/endpoints";
import Table from "../components/Table/Table";
import IssuesTable from "./components/IssuesTable/IssuesTable";
import Pagination from "../components/Pagination/Pagination";

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
