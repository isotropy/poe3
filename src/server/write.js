import db from "./db";

export async function write(haiku) {
  db.posts = db.posts.concat(haiku)
}
