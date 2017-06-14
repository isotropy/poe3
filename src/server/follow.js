import db from "./db";

export async function follow(userId, toFollow) {
  const user = db.users.find(u => u.id === userId);
  const follows = user.follows.length === 0 ? [] : user.follows.split(",");
  if (!follows.includes(toFollow)) {
    const updatedFollows = follows.concat(toFollow).join(",");
    db.users = db.users.map(
      u => (u.id === userId ? { ...u, follows: updatedFollows } : u)
    );
  }
}
