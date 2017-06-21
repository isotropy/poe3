import db from "./db";
import fs from "./fs";

export async function getProfile(userId) {
  const user = db.users.filter(u => u.id === userId)[0];
  const notifications = db.notifications.filter(i => i.userId === userId);
  const activity = db.activity.filter(i => i.userId === userId);
  const posts = db.posts.filter(i => i.userId === userId);
  return {
    user,
    notifications,
    activity,
    posts
    //,image: fs.images.find(f => f.filename === user.image).contents
  };
}

// export async function getPosts(userId) {
//   const posts = db.posts.filter(post => post.userId === userId);
//   return posts.map(
//     post =>
//       post.color
//         ? post
//         : {
//             ...post,
//             image: fs.images.find(f => f.filename === post.image).contents
//           }
//   );
// }
