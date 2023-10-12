import Table from "@/app/components/Table/Table";
import { IssuesTableProps } from "./types";
import IssueRow from "../IssueRow/IssueRow";
import IssueIcon from "@/assets/icons/IssueIcon";
import IssuesTableHeader from "./IssuesTableHeader";

const IssuesTable: React.FunctionComponent<IssuesTableProps> = ({
  data,
  repoDetail,
  labels,
}) => {
  const renderedContent = data.map((issue) => (
    <IssueRow icon={<IssueIcon />} issue={issue} key={issue.id} />
  ));

  return (
    <Table
      content={renderedContent}
      header={<IssuesTableHeader labels={labels} repoDetail={repoDetail} />}
    />
  );
};
export default IssuesTable;
