import db from "./db";
import fs from "./fs";

export async function getImage(image) {
  return !image ? null : fs.images.find(f => f.filename === image).contents;
}
