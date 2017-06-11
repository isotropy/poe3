import db from "./db";
import fs from "./fs";

export async function write(haiku) {
  const contents = haiku.image;
  const filename = nameGenerator(fs.images.map(f => f.filename));
  db.posts = db.posts.concat({
    ...haiku,
    id: ++db.posts.length,
    image: filename,
    likeCount: 0
  });
  fs.images = fs.images.concat({
    dir: haiku.authorId,
    filename,
    contents
  });
}

const nameGenerator = (
  fileArray,
  name = Math.random().toString(16).substring(2)
) => (fileArray.includes(name) ? nameGenerator(fileArray) : name);
