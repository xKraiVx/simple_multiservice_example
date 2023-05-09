import React from "react";
import { PostCreate } from "./components/post-create";
import { PostList } from "./components/post-list";
import { useApiProvider } from "./hooks/use-api-provider";

const App = () => {
  const { posts } = useApiProvider();
  return (
    <div className="container">
      <h1>Create post</h1>
      <PostCreate />
      <h2>Posts</h2>
      <PostList posts={posts} />
    </div>
  );
};

export default App;
