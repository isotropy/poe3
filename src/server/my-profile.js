import db from "./db";
import fs from "./fs";

export async function getProfile(userId) {
  const user = db.users.find(u => u.id === userId);
  const notifications = db.notifications.filter(i => i.userId === userId);
  const activity = db.activity.filter(i => i.userId === userId);
  const posts = db.posts.filter(i => i.userId === userId);
  return {
    profile: {
      user,
      notifications,
      activity
    },
    posts
  };
}
