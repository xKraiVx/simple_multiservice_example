import axios from "axios";

const getPosts = async () => await axios.get("http://localhost:4000/posts");

const createPost = async (title) =>
  await axios.post("http://localhost:4000/posts", {
    title,
  });

const getAllComments = async () =>
  await axios.get(`http://localhost:4001/posts/comments`);

const getPostComments = async (postId) =>
  await axios.get(`http://localhost:4001/posts/${postId}/comments`);

const createComment = async (postId, content) =>
  await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
    content,
  });

export const postsApi = {
  getPosts,
  createPost,
  getPostComments,
  getAllComments,
  createComment,
};
