import {
  getGithubIssuesDetail,
  getGithubIssuesDetailComments,
} from "@/services/endpoints";
import { NextRequest } from "next/server";

const IssueDetail = async ({ params }: { params: { detail: string } }) => {
  const detail = await getGithubIssuesDetail({ issue: params.detail });
  const comments = await getGithubIssuesDetailComments({
    issue: params.detail,
  });
  console.log(comments);
  return <div>Detail Page</div>;
};
export default IssueDetail;
