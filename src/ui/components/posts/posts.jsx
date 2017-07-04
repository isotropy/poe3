import React, { Component } from "react";
import Post from "./post";

export default ({ posts, user, sessionId }) => {
  return (
    <ul className="posts">
      {posts.map(item =>
        <Post post={item} user={user} sessionId={sessionId} key={`post_${item.id}`} />
      )}
    </ul>
  );
};
