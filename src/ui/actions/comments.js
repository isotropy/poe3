import * as commentsAPI from "../../server/comments";
import ramda from "ramda";

export async function write(haiku) {
  const results = await writeAPI.write(haiku);
}

export async function getComments(posts) {
  const results = [];
  posts.forEach(async post => {
    let ungroupedComments = await commentsAPI.getLatest(post.id);

    const comments = ramda.groupBy(c => c.parentCommentId || "root")(
      ungroupedComments
    );

    const result = {
      ...post,
      comments: comments.root
        ? comments.root.reduce(
            (acc, comment) =>
              acc.concat({ ...comment, children: comments[comment.id] }),
            []
          )
        : []
    };
    results.push(result);
  });
  return results;
}
