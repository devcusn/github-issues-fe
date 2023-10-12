import SingleComment from "./SingleComment";
import { DetailCommentsProps } from "./types";

const DetailComments: React.FunctionComponent<DetailCommentsProps> = ({
  comments,
}) => {
  return (
    <>
      {comments.map((c) => (
        <SingleComment key={c.id} comment={c} />
      ))}
    </>
  );
};
export default DetailComments;
