export default {
  posts: [
    {
      id: 1,
      type: "haiku",
      author: "Ō no Yasumaro",
      lines: "While you decline to cry\nhigh on the mountainside\na single stalk of plumegrass wilts.\n",
      image: "The_Scream.jpg",
      date: "01-01-711",
      exactDate: false,
      likeCount: 1434
    },
    {
      id: 2,
      type: "haiku",
      author: "Matsuo Basho",
      lines: "A crow settles\non a withered branch\nautumn nightfall..\n",
      image: "/dev/images/posts/woman-kooning.jpg",
      likeCount: 1132
    },
    {
      id: 3,
      type: "haiku",
      author: "Edvard Munch",
      authorId: 1,
      lines: "The slow reverberation\nSplits the silence\nShatters the soul",
      image: "/dev/images/posts/The_Scream.jpg",
      timeStamp: "17:28 05-07-2017",
      likeCount: 0
    }
  ],
  comments: [
    {
      id: 1,
      postId: 3,
      userId: 2,
      userName: "Salvador Dali",
      userPicture: "/site/dev/images/users/1.png",
      message: "Whoa!",
      timeStamp: "17:32 05-07-2017"
    },
    {
      id: 2,
      postId: 3,
      userId: 2,
      userName: "Salvador Dali",
      userPicture: "/site/dev/images/users/1.png",
      message: "This is terrible..",
      timeStamp: "04:39 06-07-2017"
    },
    {
      id: 3,
      postId: 1,
      userId: 2,
      message: "Sickkk..",
      userName: "Salvador Dali",
      userPicture: "/site/dev/images/users/1.png",
      timeStamp: "00:00 01-01-2000"
    },
    {
      id: 4,
      postId: 2,
      userId: 2,
      userName: "Salvador Dali",
      userPicture: "/site/dev/images/users/1.png",
      message: "rekt!",
      timeStamp: "00:00 01-01-2000"
    },
    {
      id: 5,
      postId: 3,
      parentCommentId: 2,
      userId: 1,
      userName: "Edvard Munch",
      userPicture: "/site/dev/images/users/1.png",
      message: "Well, too bad for you",
      timeStamp: "07:22 06-07-2017"
    },
    {
      id: 6,
      postId: 3,
      parentCommentId: 2,
      userId: 2,
      userName: "Salvador Dali",
      userPicture: "/site/dev/images/users/1.png",
      message: "meh",
      timeStamp: "09:03 07-07-2017"
    }
  ],
  users: [
    {
      id: 1,
      name: "Edvard Munch",
      image: "/site/dev/images/users/1.png",
      follows: "2",
      likes: ""
    },
    {
      id: 2,
      name: "Salvador Dali",
      image: "/site/dev/images/users/1.png",
      follows: "1",
      likes: ""
    }
  ],
  homeFeed: [
    { userId: 1, postId: 12 },
    { userId: 1, postId: 14 },
    { userId: 2, postId: 3 }
  ],
  exploreFeed: [
    { userId: 1, postId: 1 },
    { userId: 1, postId: 2 },
    { userId: 2, postId: 1 },
    { userId: 2, postId: 2 }
  ]
};
