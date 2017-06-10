import db from "./db";
import fs from "./fs";

export async function getProfile(userId) {
  const user = db.users.filter(u => u.id === userId)[0];
  const notifications = []
  const activity = []
  db.log.forEach(entry => {
    if (entry.userId === userId) notifications.push(entry)
    if (entry.actionUser === userId) activity.push(entry)
  });
  return {
    ...user,
    notifications,
    activity,
    image: fs.find(f => f.filename === user.image)["contents"]
  };
}

export async function getPosts(userId) {
  return db.posts.filter(post => post.authorId === userId);
}
