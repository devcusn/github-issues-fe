import Table from "@/app/components/Table/Table";
import { IssuesTableProps } from "./types";
import IssueRow from "../IssueRow/IssueRow";

const IssuesTable: React.FunctionComponent<IssuesTableProps> = ({ data }) => {
  const renderedContent = data.map((issue) => (
    <IssueRow key={issue.id} title={issue.title} />
  ));
  return <Table content={renderedContent} />;
};
export default IssuesTable;
