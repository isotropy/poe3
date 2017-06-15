import db from "./db";
import fs from "./fs";

export async function getImage(image) {
  return fs.images.find(f => f.filename === image).contents;
}
