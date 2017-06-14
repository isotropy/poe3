import db from "./db";

export async function like(userId, postId) {
  const user = db.users.find(u => u.id === userId);
  const likes = user.likes.length === 0 ? [] : user.likes.split(",");
  if (!likes.includes(postId)) {
    const updatedLikes = likes.concat(postId).join(",");
    db.users = db.users.map(u => (u.id === userId ? { ...u, likes: updatedLikes } : u));
    db.posts = db.posts.map(
      post => (post.id === postId ? { ...post, likeCount: ++post.likeCount } : post)
    );
  }
}
