import Label from "@/app/components/Label/Label";

import { IssueRowLabelsProps } from "./types";

const IssueRowLabels: React.FunctionComponent<IssueRowLabelsProps> = ({
  issue,
}) => {
  return (
    <>
      {issue?.labels?.map((l) => (
        <Label
          key={l.id}
          variant="success"
          title={l.name}
          color={`#${l.color}`}
        />
      ))}
    </>
  );
};
export default IssueRowLabels;
