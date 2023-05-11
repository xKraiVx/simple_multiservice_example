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

  const [apiState, setApiState] = useState({
    posts: {},
    refetchPosts: fetchPosts,
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  return <ApiContext.Provider value={apiState}>{children}</ApiContext.Provider>;
};
