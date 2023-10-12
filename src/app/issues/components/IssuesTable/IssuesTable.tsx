import Table from "@/app/components/Table/Table";
import NotFound from "@/app/components/NotFound/NotFound";
import IssueIcon from "@/assets/icons/IssueIcon";

import IssueRow from "../IssueRow/IssueRow";
import IssuesTableHeader from "./IssuesTableHeader";
import { IssuesTableProps } from "./types";

const IssuesTable: React.FunctionComponent<IssuesTableProps> = ({
  data,
  repoDetail,
  labels,
  authors,
}) => {
  const renderedContent =
    data.length > 0 ? (
      data?.map((issue) => (
        <IssueRow icon={<IssueIcon />} issue={issue} key={issue.id} />
      ))
    ) : (
      <NotFound />
    );

  return (
    <Table
      content={renderedContent}
      header={
        <IssuesTableHeader
          labels={labels}
          repoDetail={repoDetail}
          authors={authors}
        />
      }
    />
  );
};
export default IssuesTable;
