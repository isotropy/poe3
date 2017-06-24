import React, { Component } from "react";
import Likes from "./likes";
import Comments from "./comments";

export default ({ post, user }) => {
  return (
    <li
      className="post"
      style={{
        backgroundImage: `url(${post.imageData})` || "none",
        backgroundColor: post.color || "none",
        backgroundSize: "cover"
      }}>
      <ul className="lines">
        {post.lines
          .split("\n")
          .map((line, i) => <li key={`line_${i}`}>{line}</li>)}
      </ul>
      <Likes postId={post.id} likes={post.likes} likeCount={post.likeCount} user={user} />
      <Comments postId={post.id} comments={post.comments} post={post} user={user} />
    </li>
  );
};
