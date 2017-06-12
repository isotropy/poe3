import db from "./db";
import fs from "./fs";

export async function write(haiku) {
  const contents = haiku.image;
  const filename = ++db.meta.imageId;
  db.posts = db.posts.concat({
    ...haiku,
    id: ++db.meta.postId,
    image: filename,
    likeCount: 0
  });
  fs.images = fs.images.concat({
    dir: haiku.authorId,
    filename,
    contents
  });
}
