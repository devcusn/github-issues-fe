import { Comment } from "@/services/types";

export type DetailCommentsProps = {
  comments: Array<Comment>;
};

export type SingleCommentProps = {
  comment: Comment;
};
