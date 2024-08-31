// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

// Function to fetch posts
const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery("posts", fetchPosts);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Data</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
