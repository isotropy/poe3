import * as commentsAPI from "../../server/comments";

export async function write(haiku) {
  const results = await writeAPI.write(haiku);
}
