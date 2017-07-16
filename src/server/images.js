import db from "./db";
import fs from "./fs";

export async function getImage(path) {
  return !path ? null : fs.images.find(f => f.path === path).contents;
}
