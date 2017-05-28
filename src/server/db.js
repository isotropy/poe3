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
      image: "/dev/images/The_Scream.jpg",
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
      image: "/dev/images/The_Scream.jpg",
      likeCount: 0
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
