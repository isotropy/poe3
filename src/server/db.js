export default {
  posts: [
    {
      id: "p1",
      type: "haiku",
      userId: "yasumaro",
      userFullName: "Ō no Yasumaro",
      lines:
        "While you decline to cry\nhigh on the mountainside\na single stalk of plumegrass wilts.\n",
      image: "The_Scream",
      date: "01-01-711",
      exactDate: false,
      likeCount: 1434
    },
    {
      id: "p2",
      type: "haiku",
      userId: "matsuo",
      userFullName: "Matsuo Basho",
      lines: "A crow settles\non a withered branch\nautumn nightfall..\n",
      image: "woman-kooning",
      likeCount: 1132
    },
    {
      id: "p3",
      type: "haiku",
      userId: "edvard_munch",
      userFullName: "Edvard Munch",
      lines: "The slow reverberation\nSplits the silence\nShatters the soul",
      image: "The_Scream",
      timestamp: "17:28 05-07-2017",
      likeCount: 0
    },
    {
      id: "p4",
      type: "haiku",
      userId: "sadali",
      userFullName: "Salvador Dali",
      lines: "Greens and Beans\nSeamless Dreams\nSinful Feen",
      color: "#37512e",
      timestamp: "19:38 20-07-2017",
      likeCount: 0
    }
  ],
  comments: [
    {
      id: "c1",
      postId: "p3",
      userId: "sadali",
      userFullName: "Salvador Dali",
      userPicture: "dali",
      message: "Whoa!",
      timestamp: 1497498441691
    },
    {
      id: "c2",
      postId: "p3",
      userId: "sadali",
      userFullName: "Salvador Dali",
      userPicture: "dali",
      message: "This is terrible..",
      timestamp: 149749854437
    },
    {
      id: "c3",
      postId: "p1",
      userId: "sadali",
      message: "Sickkk..",
      userFullName: "Salvador Dali",
      userPicture: "dali",
      timestamp: 1497498463422
    },
    {
      id: "c4",
      postId: "p2",
      userId: "sadali",
      userName: "Salvador Dali",
      userPicture: "dali",
      message: "rekt!",
      timestamp: 1497498467432
    },
    {
      id: "c5",
      postId: "p3",
      parentCommentId: "c2",
      userId: "edvard_munch",
      userFullName: "Edvard Munch",
      userPicture: "munch",
      message: "Well, too bad for you",
      timestamp: 1497498471622
    },
    {
      id: "c6",
      postId: "p3",
      parentCommentId: "c2",
      userId: "sadali",
      userFullName: "Salvador Dali",
      userPicture: "dali",
      message: "meh",
      timestamp: 1497498481691
    }
  ],
  users: [
    {
      id: "edvard_munch",
      name: "Edvard Munch",
      profile: "edvard_munch",
      image: "munch",
      follows: "sadali",
      likes: ""
    },
    {
      id: "sadali",
      name: "Salvador Dali",
      profile: "sadali",
      image: "dali",
      follows: "edvard_munch",
      likes: ""
    }
  ],
  homeFeed: [
    { userId: "sadali", postId: "p3" },
    { userId: "edvard_munch", postId: "p13" }
  ],
  exploreFeed: [
    { userId: "dfault", postId: "p1" },
    { userId: "dfault", postId: "p2" },
    { userId: "sadali", postId: "p1" },
    { userId: "sadali", postId: "p2" },
    { userId: "edvard_munch", postId: "p3" },
    { userId: "edvard_munch", postId: "p4" }
  ],
  notifications: [
    {
      userId: "sadali",
      type: "new-follower",
      follower: 4
    },
    {
      userId: "sadali",
      type: "new-follower",
      follower: 5
    }
  ],
  activity: [
    {
      userId: "sadali",
      type: "like",
      postId: 3
    },
    {
      userId: "sadali",
      type: "like",
      postId: 4
    },
    {
      userId: "sadali",
      type: "comment",
      postId: 5,
      commentId: 5
    }
  ],
  identities: [{ service: "google", serviceId: "s_dali", id: 'sadali' }]
};
