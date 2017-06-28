import db from "./db";

export async function getLikes(postId) {
  const test = db.likes.filter(like => like.postId === postId);
  return test;
}

export async function toggleLike(userId, userFullName, postId) {
  //See if there is an existing like on it
  const likes = db.likes.filter(like => like.userId === userId);

  const hasLiked = likes.some(like => like.postId === postId);

  if (hasLiked) {
    //Decrement likeCount on post
    db.posts = db.posts.map(
      post =>
        post.id === postId ? { ...post, likeCount: post.likeCount - 1 } : post
    );

    //remove like from likes table
    db.likes = db.likes.filter(
      like => like.postId !== postId || like.userId !== userId
    );

    //Update likes on user table
    const likesString = likes
      .filter(like => like.postId !== postId)
      .map(like => like.postId)
      .join(",");

    db.users = db.users.map(
      u => (u.userId === userId ? { ...u, likes: likesString } : u)
    );
  } else {
    //Increment likeCount on post
    db.posts = db.posts.map(
      post =>
        post.id === postId ? { ...post, likeCount: post.likeCount + 1 } : post
    );

    //add like to likes table
    db.likes = db.likes.concat({ userId, postId });

    //Update likes on user table
    const likesString = likes.concat({ userId, postId });

    db.users = db.users.map(
      u => (u.userId === userId ? { ...u, likes: likesString } : u)
    );
  }
}

// export async function like(userId, userFullName, postId) {
//   const likes = db.likes.filter(like => like.postId === postId);
//   const user = db.users.find(user => user.id === userId);
//   let likeCount = 0;
//
//   if (likes.length > 0) {
//     //NOT WORKIE
//     db.posts = db.posts.map(post => {
//       if (post.id === postId) {
//         likeCount = post.likeCount - 1;
//         return { ...post, likeCount };
//       }
//       return post;
//     });
//     //WORKS
//     db.posts = db.posts.map(
//       post =>
//         post.id === postId ? { ...post, likeCount: likeCount + 1 } : post
//     );
//
//     const userLikes = user.likes.split(",");
//     userLikes.splice(userLikes.indexOf(postId), 1);
//     db.users = db.users.map(
//       user =>
//         user.id === userId ? { ...user, likes: userLikes.toString() } : user
//     );
//     db.likes = db.likes.filter(like => like.postId !== postId);
//   } else {
//     db.posts = db.posts.map(post => {
//       if (post.id === postId) {
//         likeCount = post.likeCount + 1;
//         return { ...post, likeCount: post.likeCount + 1 };
//       }
//       return post;
//     });
//     db.users = db.users.map(
//       user =>
//         user.id === userId
//           ? { ...user, likes: user.likes + "," + postId }
//           : user
//     );
//     db.likes = db.likes.concat({ postId, userId, userFullName });
//   }
//   return likeCount;
// }
