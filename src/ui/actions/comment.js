import * as writeAPI from "../../server/comment";
// import { updateState } from 'redux-jetpack'

export async function write(comment) {
  const results = await writeAPI.writeComment(comment);
}
