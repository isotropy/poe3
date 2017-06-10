export default {
  posts: [
    {
      id: 1,
      type: "haiku",
      author: "Ō no Yasumaro",
      lines: "While you decline to cry\nhigh on the mountainside\na single stalk of plumegrass wilts.\n",
      image: "The_Scream",
      date: "01-01-711",
      exactDate: false,
      likeCount: 1434
    },
    {
      id: 2,
      type: "haiku",
      author: "Matsuo Basho",
      lines: "A crow settles\non a withered branch\nautumn nightfall..\n",
      image: "woman-kooning",
      likeCount: 1132
    },
    {
      id: 3,
      type: "haiku",
      author: "Edvard Munch",
      authorId: 1,
      lines: "The slow reverberation\nSplits the silence\nShatters the soul",
      image: "The_Scream",
      timeStamp: "17:28 05-07-2017",
      likeCount: 0
    },
    {
      id: 4,
      type: "haiku",
      author: "Salvador Dali",
      authorId: 2,
      lines: "Greens and Beans\nSeamless Dreams\nSinful Feen",
      color: "#37512e",
      timeStamp: "19:38 20-07-2017",
      likeCount: 0
    }
  ],
  comments: [
    {
      id: 1,
      postId: 3,
      userId: 2,
      userName: "Salvador Dali",
      userPicture: "dali",
      message: "Whoa!",
      timeStamp: "17:32 05-07-2017"
    },
    {
      id: 2,
      postId: 3,
      userId: 2,
      userName: "Salvador Dali",
      userPicture: "dali",
      message: "This is terrible..",
      timeStamp: "04:39 06-07-2017"
    },
    {
      id: 3,
      postId: 1,
      userId: 2,
      message: "Sickkk..",
      userName: "Salvador Dali",
      userPicture: "dali",
      timeStamp: "00:00 01-01-2000"
    },
    {
      id: 4,
      postId: 2,
      userId: 2,
      userName: "Salvador Dali",
      userPicture: "dali",
      message: "rekt!",
      timeStamp: "00:00 01-01-2000"
    },
    {
      id: 5,
      postId: 3,
      parentCommentId: 2,
      userId: 1,
      userName: "Edvard Munch",
      userPicture: "munch",
      message: "Well, too bad for you",
      timeStamp: "07:22 06-07-2017"
    },
    {
      id: 6,
      postId: 3,
      parentCommentId: 2,
      userId: 2,
      userName: "Salvador Dali",
      userPicture: "dali",
      message: "meh",
      timeStamp: "09:03 07-07-2017"
    }
  ],
  users: [
    {
      id: 1,
      name: "Edvard Munch",
      image: "munch",
      follows: "2",
      likes: ""
    },
    {
      id: 2,
      name: "Salvador Dali",
      image: "dali",
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
  ],
  log: [
    { userId: 1, actionUser: 2, type: "comment", postId: 3, timeStamp: "07:22 06-07-2017" },
    { userId: 2, actionUser: 1, type: "comment", postId: 3, timeStamp: "04:39 06-07-2017" },
    { userId: 2, actionUser: 1, type: "comment", postId: 3, timeStamp: "09:03 07-07-2017" }
  ]
};
