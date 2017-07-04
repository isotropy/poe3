import db from "./db";
import * as APIAuth from "./helpers/api-auth";

export async function like(userId, postId) {
  const data = JSON.stringify({ post: db.posts.find(p => p.id === postId) });

  db.activities = db.activities.concat({
    userId,
    type: "like",
    data,
    timestamp: Date.now()
  });
}

export async function removeLike(userId, postId) {
  db.activities = db.activities.filter(
    !(a => a.userId === userId && JSON.parse(a.data).post.id === postId)
  );
}

export async function comment(userId, comment) {
  const data = JSON.stringify({
    post: db.posts.find(p => p.id === comment.postId),
    message: comment.message
  });

  db.activities = db.activities.concat({
    userId,
    type: "comment",
    data,
    timestamp: Date.now()
  });
}
