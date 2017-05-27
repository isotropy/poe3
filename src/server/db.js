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
      image: "/site/dev/images/bg-1.png",
      date: "01-01-711",
      exactDate: false,
      likeCount: 1434
    },
    {
      id: 2,
      type: "haiku",
      author: "Matsuo Basho",
      lines: ["A crow settles", "on a withered branch:", "autumn nightfall.."],
      image: "/site/dev/images/bg-2.png",
      likeCount: 1132
    },
    {
      id: 3,
      type: 'haiku',
      author: 'Edvard Munch',
      authorId: 1,
      lines: ['The slow reverberation', 'Splits the silence', 'Shatters the soul'],
      image: '/site/dev/images/bg-1.png',
      likeCount: 0
    }
  ],
  profiles: [
    {
      id: 1,
      name: 'Edvard Munch',
      image: '/site/profile/images/1.png',
      follows: [ 2 ],
      likes: [ ]
    },
    {
      id: 2,
      name: 'Salvador Dali',
      image: '/site/profile/images/1.png',
      follows: [ ],
      likes: [ ]
    }
  ]
};
