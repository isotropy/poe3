import React, { Component } from "react";
import Likes from "./likes";
import Comments from "./comments";

export default ({ post, user, sessionId }) => {
  return (
    <li
      className={["post"].concat(post.image ? ["bg-image"] : []).join(" ")}
      style={{
        ...(post.image
          ? {
              backgroundImage: `url(${post.image})` || "none",
              backgroundSize: "cover"
            }
          : {}),
        ...(post.backgroundColor
          ? {
              backgroundColor: post.backgroundColor || "none"
            }
          : {})
      }}
    >
      <ul className="lines">
        {post.lines.split("\n").map((line, i) =>
          <li key={`line_${i}`}>
            {line}
          </li>
        )}
      </ul>
      <Likes post={post} user={user} sessionId={sessionId} />
      <Comments post={post} user={user} sessionId={sessionId} />
    </li>
  );
};
