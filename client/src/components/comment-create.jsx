import { useState } from "react";
import { postsApi } from "../api/posts.api";
import { useApiProvider } from "../hooks/use-api-provider";

export const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const { refetchComments } = useApiProvider();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postsApi.createComment(postId, content);
    setContent("");
    refetchComments();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>New comment</label>
          <input
            value={content}
            type="text"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
};
