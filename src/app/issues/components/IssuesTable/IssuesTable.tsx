import Table from "@/app/components/Table/Table";
import { IssuesTableProps } from "./types";
import IssueRow from "../IssueRow/IssueRow";
import IssueIcon from "@/assets/icons/IssueIcon";

const IssuesTable: React.FunctionComponent<IssuesTableProps> = ({ data }) => {
  const renderedContent = data.map((issue) => (
    <IssueRow icon={<IssueIcon />} issue={issue} key={issue.id} />
  ));

  return <Table content={renderedContent} />;
};
export default IssuesTable;
