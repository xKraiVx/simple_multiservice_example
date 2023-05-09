import { createContext, useEffect, useState } from "react";
import { postsApi } from "../api/posts.api";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const fetchPosts = async () => {
    const posts = await postsApi.getPosts();
    setApiState((prev) => ({
      ...prev,
      posts: posts.data,
    }));
  };
  const fetchComments = async () => {
    const comments = await postsApi.getAllComments();
    setApiState((prev) => ({
      ...prev,
      comments: comments.data,
    }));
  };

  const [apiState, setApiState] = useState({
    comments: {},
    posts: {},
    refetchPosts: fetchPosts,
    refetchComments: fetchComments,
  });

  useEffect(() => {
    fetchPosts();
    fetchComments();
  }, []);

  return <ApiContext.Provider value={apiState}>{children}</ApiContext.Provider>;
};
