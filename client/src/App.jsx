import React from "react";
import { PostCreate } from "./components/post-create";
import { PostList } from "./components/post-list";

const App = () => {
  return (
    <div className="container">
      <h1>Create post</h1>
      <PostCreate />
      <h2 className="mt-3">Posts</h2>
      <PostList />
    </div>
  );
};

export default App;
