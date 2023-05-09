import React, { useState } from "react";
import { useApiProvider } from "../hooks/use-api-provider";
import { postsApi } from "../api/posts.api";

export const PostCreate = () => {
  const [title, setTitle] = useState("");
  const { refetchPosts } = useApiProvider();

  const { createPost } = postsApi;

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createPost(title);
    setTitle("");
    refetchPosts();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Post Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};
