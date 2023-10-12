import { DetailCommentsProps } from "./types";

const DetailComments: React.FunctionComponent<DetailCommentsProps> = ({
  comments,
}) => {
  return (
    <div>
      {comments.map((c) => (
        <div key={c.id}>{c.url}</div>
      ))}
    </div>
  );
};
export default DetailComments;
