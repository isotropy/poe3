export default {
  posts: [
    {
      id: 1,
      type: "haiku",
      author: "Ō no Yasumaro",
      lines: [
        "While you decline to cry",
        "high on the mountainside",
        "a single stalk of plumegrass wilts."
      ],
      image: "/dev/images/posts/The_Scream.jpg",
      date: "01-01-711",
      exactDate: false,
      likeCount: 1434
    },
    {
      id: 2,
      type: "haiku",
      author: "Matsuo Basho",
      lines: ["A crow settles", "on a withered branch:", "autumn nightfall.."],
      image: "/dev/images/posts/woman-kooning.jpg",
      likeCount: 1132
    },
    {
      id: 3,
      type: 'haiku',
      author: 'Edvard Munch',
      authorId: 1,
      lines: ['The slow reverberation', 'Splits the silence', 'Shatters the soul'],
      image: "/dev/images/posts/The_Scream.jpg",
      timeStamp: '17:28 05-07-2017',
      likeCount: 0
    }
  ],
  comments: [
    {
      id: 1,
      postId: 3,
      userId: 2,
      message: 'Whoa!',
      timestamp: '17:32 05-07-2017'
    },
    {
      id: 2,
      postId: 3,
      userId: 2,
      message: 'This is terrible..',
      timestamp: '04:39 06-07-2017'
    },
    {
      id: 3,
      postId: 1,
      userId: 2,
      message: 'Sickkk..',
      timestamp: '00:00 01-01-2000'
    },
    {
      id: 4,
      postId: 2,
      userId: 2,
      message: 'rekt!',
      timestamp: '00:00 01-01-2000'
    }
  ],
  commentReplies: [
    {
      id: 1,
      parentCommentId: 2,
      userId: 1,
      message: 'Well, too bad for you',
      timestamp: '07:22 06-07-2017'
    }
  ],
  users: [
    {
      id: 1,
      name: 'Edvard Munch',
      image: '/site/dev/images/users/1.png',
      follows: [ ],
      likes: [ ]
    },
    {
      id: 2,
      name: 'Salvador Dali',
      image: '/site/dev/images/users/1.png',
      follows: [ 1 ],
      likes: [ ]
    }
  ]
};
