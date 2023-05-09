import { useMemo } from "react";
import { CommentCreate } from "./comment-create";
import { CommentList } from "./comment-list";

export const PostList = ({ posts }) => {
  const renderedPosts = useMemo(
    () =>
      Object.values(posts).map((post, idx) => {
        return (
          <div
            key={idx}
            className="card"
            style={{ width: "30%", marginBottom: 20 }}
          >
            <div className="card-body">
              <h3>{post.title}</h3>
              <CommentList postId={post.id} />
              <CommentCreate postId={post.id} />
            </div>
          </div>
        );
      }),
    [posts]
  );

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
