import ramda from "ramda";
import * as commentsAPI from "../comments";
import * as imageAPI from "../image";

export async function getFullComment(postId) {
  const ungroupedComments = await commentsAPI.getLatest(postId);
  const imagedUngroupedComments = await Promise.all(
    ungroupedComments.map(async ungroupedComment => ({
      ...ungroupedComment,
      userPictureData: await imageAPI.getImage(ungroupedComment.userPicture)
    }))
  );
  const groupedComments = ramda.groupBy(c => c.parentCommentId || "root")(
    imagedUngroupedComments
  );
  return groupedComments.root
    ? groupedComments.root.reduce(
        (acc, comment) =>
          acc.concat({ ...comment, children: groupedComments[comment.id] }),
        []
      )
    : [];
}
