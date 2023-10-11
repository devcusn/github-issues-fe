import { getGithubIssues } from "@/services/endpoints";
import Table from "../components/Table/Table";
import IssuesTable from "./components/IssuesTable/IssuesTable";

const IssuesPage = async () => {
  const res = await getGithubIssues();

  return (
    <>
      <IssuesTable data={res} />
    </>
  );
};
export default IssuesPage;
