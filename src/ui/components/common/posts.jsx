import React, { Component } from "react";
import Post from "./post";

export default ({ posts }) => {
  return (
    <ul className="posts">
      {posts.map(item => <Post post={item} />)}
    </ul>
  );
};
