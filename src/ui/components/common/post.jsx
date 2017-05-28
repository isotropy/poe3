import React, { Component } from "react";

export default ({ post }) => {
  return (
    <li
      className="post"
      style={{ backgroundImage: `url(${post.image})` || "none", backgroundSize: "cover" }}
    >
      <ul className="lines">{post.lines.map(i => <li>{i}</li>)}</ul>
    </li>
  );
};
