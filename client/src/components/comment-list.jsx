import { useMemo } from "react";
import { useApiProvider } from "../hooks/use-api-provider";

export const CommentList = ({ postId }) => {
  const { posts } = useApiProvider();
  const comments = posts[postId]?.comments;

  const renderComments = useMemo(
    () =>
      comments?.map((comment, idx) => {
        let content = comment.content;

        if (comment.status === "pending") {
          content = "This comment is awaiting moderation";
        }
        if (comment.status === "rejected") {
          content = "This comment has been rejected";
        }

        return <li key={idx}>{content}</li>;
      }),
    [comments]
  );

  return (
    <div>
      <span>{renderComments?.length}</span>
      {renderComments?.length ? <ul>{renderComments}</ul> : null}
    </div>
  );
};
