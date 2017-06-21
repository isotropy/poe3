import * as followAPI from "../../server/follow";


export async function follow(userId, toFollow) {
  const results = await followAPI.follow(userId, toFollow);
}
