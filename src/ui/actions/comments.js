import * as commentsAPI from "../../server/comments";
import ramda from "ramda";

export async function write(haiku) {
  const results = await writeAPI.write(haiku);
}

export async function getComments(postId) {
  let ungroupedComments = await commentsAPI.getLatest(postId);

  const comments = ramda.groupBy(c => c.parentCommentId || "root")(
    ungroupedComments
  );

  return comments.root
    ? comments.root.reduce(
        (acc, comment) =>
          acc.concat({ ...comment, children: comments[comment.id] }),
        []
      )
    : [];
}
