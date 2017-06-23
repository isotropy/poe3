import * as likesAPI from "../../server/likes";

export async function like(userId, userFullName, post) {
  const results = await likesAPI.like(userId, userFullName, post.id);
}
