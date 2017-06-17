import db from "./db";
import fs from "./fs";
import idGenerator from "./helpers/id-generator";

export async function write(haiku) {
  const contents = haiku.image;
  const filename = ++db.meta.imageId;

  db.posts = db.posts.concat({
    ...haiku,
    id: idGenerator("p"),
    image: filename,
    likeCount: 0
  });

  fs.images = fs.images.concat({
    dir: haiku.userId,
    filename,
    contents
  });
}
