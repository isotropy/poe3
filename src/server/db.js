export default {
  posts: [
    {
      id: "p1",
      type: "haiku",
      userId: "yasumaro",
      userFullName: "Ō no Yasumaro",
      title: "While you decline to cry",
      lines:
        "While you decline to cry\nhigh on the mountainside\na single stalk of plumegrass wilts.\n",
      image: "/images/yasumaro/water-lilies-monet.jpg",
      date: "01-01-711",
      exactDate: false,
      likeCount: 1434
    },
    {
      id: "p2",
      type: "haiku",
      userId: "matsuo",
      userFullName: "Matsuo Bashō",
      title: "In the cicada's cry",
      lines:
        "In the cicada's cry\nThere's no sign that can foretell\nHow soon it must die.",
      image: "/images/basho/woman-kooning.jpg",
      likeCount: 1132
    },
    {
      id: "p3",
      type: "haiku",
      userId: "matsuo",
      userFullName: "Matsuo Bashō",
      title: "Slow reverberation",
      lines: "The slow reverberation\nSplits the silence\nShatters the soul",
      image: "/images/basho/the-scream-munch.jpg",
      timestamp: 1497498441691,
      likeCount: 0
    },
    {
      id: "p4",
      type: "haiku",
      userId: "basho",
      userFullName: "Matsuo Bashō",
      title: "Clouds",
      lines:
        "Clouds come from time to time -\nand bring to men a chance to rest\nfrom looking at the moon.",
      backgroundColor: "#37512e",
      timestamp: 1497498441691,
      likeCount: 0
    },
    {
      id: "p5",
      type: "haiku",
      userId: "issa",
      userFullName: "Kobayashi issa",
      title: "Spring Rain",
      lines: "In spring rain\na pretty girl\nyawning.",
      backgroundColor: "#22512e",
      timestamp: 1497498441691,
      likeCount: 0
    },
    {
      id: "p6",
      type: "haiku",
      userId: "issa",
      userFullName: "Kobayashi issa",
      title: "The Moth",
      lines:
        "This moth saw brightness\nin a woman's chamber\nburnt to a crisp.",
      image: "/images/issa/no-5-pollock.jpg",
      backgroundColor: "#22512e",
      timestamp: 1497498441691,
      likeCount: 0
    },
    {
      id: "p7",
      type: "haiku",
      userId: "issa",
      userFullName: "Kobayashi issa",
      title: "Napped",
      lines: "Napped half the day;\nno one\npunished me!",
      backgroundColor: "#22512e",
      timestamp: 1497498441691,
      likeCount: 0
    },
    {
      id: "p8",
      type: "haiku",
      userId: "issa",
      userFullName: "Kobayashi issa",
      title: "Pissing in the snow",
      lines:
        "Pissing in the snow\noutside my door\nit makes a very straight hole.",
      backgroundColor: "#22512e",
      timestamp: 1497498441691,
      likeCount: 0
    },
    {
      id: "p9",
      type: "haiku",
      userId: "noguchi",
      userFullName: "Yone Noguchi",
      title: "Silence of Life",
      lines:
        "Is it a fallen leaf?\nThat's my soul sailing on\nThe silence of Life.",
      backgroundColor: "#22512e",
      timestamp: 1497498441691,
      likeCount: 0
    },
    {
      id: "p10",
      type: "haiku",
      userId: "noguchi",
      userFullName: "Yone Noguchi",
      title: "Faults",
      lines:
        "Full of faults, you say.\nWhat beauty in repentance!\nTears, songs . . . thus life flows.",
      backgroundColor: "#22512e",
      timestamp: 1497498441691,
      likeCount: 0
    },
    {
      id: "p11",
      type: "haiku",
      userId: "noguchi",
      userFullName: "Yone Noguchi",
      title: "Is there anything new under the sun?",
      lines:
        "Is there anything new under the sun?\nCertainly there is.\nSee how a bird flies, how flowers smile!",
      backgroundColor: "#22512e",
      timestamp: 1497498441691,
      likeCount: 0
    }
  ],
  comments: [
    {
      id: "c1",
      postId: "p1",
      userId: "basho",
      userFullName: "Matsuo Bashō",
      message: "Whoa!",
      timestamp: 1497498441691
    },
    {
      id: "c2",
      postId: "p5",
      userId: "basho",
      userFullName: "Matsuo Bashō",
      message: "Interesting indeed...",
      timestamp: 149749854437
    },
    {
      id: "c3",
      postId: "p5",
      userId: "basho",
      message: "Get a good pic?",
      userFullName: "Matsuo Bashō",
      timestamp: 1497498463422
    },
    {
      id: "c4",
      postId: "p2",
      userId: "issa",
      userName: "Kobayashi Issa",
      message: "rekt!",
      timestamp: 1497498467432
    },
    {
      id: "c5",
      postId: "p1",
      parentCommentId: "c1",
      userId: "yasumaro",
      userFullName: "Ō no Yasumaro",
      message: "Well, thank you!",
      timestamp: 1497498471622
    },
    {
      id: "c6",
      postId: "p1",
      parentCommentId: "c1",
      userId: "basho",
      userFullName: "Matsuo Bashō",
      message: "Shaddap!",
      timestamp: 1497498481691
    }
  ],
  likes: [
    {
      postId: "p1",
      userId: "basho",
      userFullName: "Matsuo Bashō"
    },
    {
      postId: "p5",
      userId: "basho",
      userFullName: "Matsuo Bashō"
    },
    {
      postId: "p3",
      userId: "yasumaro",
      userFullName: "Ō no Yasumaro"
    },
    {
      postId: "p4",
      userId: "yasumaro",
      userFullName: "Ō no Yasumaro"
    },
    {
      postId: "p1",
      userId: "issa",
      userFullName: "Kobayashi Issa"
    },
    {
      postId: "p3",
      userId: "issa",
      userFullName: "Kobayashi Issa"
    }
  ],
  users: [
    {
      id: "basho",
      userFullName: "Matsuo Bashō",
      follows: "issa",
      likes: "p1,p5"
    },
    {
      id: "yasumaro",
      userFullName: "Ō no Yasumaro",
      follows: "basho,issa",
      likes: "p3,p4"
    },
    {
      id: "issa",
      userFullName: "Kobayashi Issa",
      follows: "basho",
      likes: "p1,p3"
    },
    {
      id: "noguchi",
      userFullName: "Yone Noguchi",
      follows: "basho",
      likes: ""
    }
  ],
  homeFeed: [
    { userId: "basho", postId: "p6" },
    { userId: "basho", postId: "p7" },
    { userId: "basho", postId: "p8" }
  ],
  exploreFeed: [
    { userId: "basho", postId: "p1" },
    { userId: "basho", postId: "p9" },
    { userId: "basho", postId: "p10" }
  ],
  notifications: [
    {
      userId: "basho",
      type: "new-follower",
      data: `{ "follower": "yasumaro" }`,
      timestamp: 0
    },
    {
      userId: "basho",
      type: "new-follower",
      data: `{ "follower": "issa" }`,
      timestamp: 0
    }
  ],
  activities: [
    {
      userId: "basho",
      type: "like",
      data: `{ "post": { "id": "p1", "type": "haiku", "title": "While you decline to cry", "userId": "yasumaro", "userFullName": "Ō no Yasumaro" } }`,
      timestamp: 0
    },
    {
      userId: "basho",
      type: "like",
      data: `{ "post": { "id": "p5", "type": "haiku", "title": "Spring Rain", "userId": "issa", "userFullName": "Kobayashi Issa" } }`,
      timestamp: 0
    }
  ],
  identities: [{ service: "google", serviceId: "matsuo.basho", id: "basho" }],
  sessions: [{ userId: "basho", sessionId: "1", validity: 1798926878615 }]
};
