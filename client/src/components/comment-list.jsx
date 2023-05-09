import { useMemo } from "react";
import { useApiProvider } from "../hooks/use-api-provider";

export const CommentList = ({ postId }) => {
  const { comments } = useApiProvider();
  const renderComments = useMemo(
    () =>
      comments?.[postId]?.map((comment, idx) => (
        <li key={idx}>{comment.content}</li>
      )),
    [comments, postId]
  );

  return (
    <div>
      <span>{renderComments?.length}</span>
      {renderComments?.length ? <ul>{renderComments}</ul> : null}
    </div>
  );
};
