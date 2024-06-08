import React from "react";
interface props {
  posts: any;
}
const Maps: React.FC<props> = ({ posts }) => {
  return (
    <div>
      {posts?.map((post: any) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <h2>{post.id}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Maps;
