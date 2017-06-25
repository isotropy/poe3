import * as likesAPI from "../../server/likes";

export async function like(userId, userFullName, postId) {
  const results = await likesAPI.like(userId, userFullName, postId);
}
