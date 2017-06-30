import React, { Component } from "react";
import Post from "./post";

export default ({ posts, user }) => {
  return (
    <ul className="posts">
      {posts.map(item =>
        <Post post={item} user={user} key={`post_${item.id}`} />
      )}
    </ul>
  );
};
