import db from "./db";
import fs from "./fs";

export async function getProfile(userId) {
  const user = db.users.filter(u => u.id === userId)[0];
  const notifications = [];
  const activity = [];
  db.log.forEach(entry => {
    if (entry.userId === userId) notifications.push(entry);
    if (entry.actionUser === userId) activity.push(entry);
  });
  return {
    ...user,
    notifications,
    activity,
    image: fs.images.find(f => f.filename === user.image).contents
  };
}

export async function getPosts(userId) {
  const posts = db.posts.filter(post => post.authorId === userId);
  return posts.map(
    post =>
      post.color
        ? post
        : {
            ...post,
            image: fs.images.find(f => f.filename === post.image).contents
          }
  );
}
