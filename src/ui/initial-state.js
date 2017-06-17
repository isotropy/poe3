export default {
  menu: {
    visible: true,
    items: [
      { key: "write", text: "Write" },
      { key: "home", text: "Home" },
      { key: "explore", selected: true, text: "Explore" },
      { key: "my-profile", text: "Profile" }
      // { key: "tags", text: "Tags" }
    ]
  },
  auth: {
    loggedIn: true,
    requiresRegistration: false,
    userIdUnAvailable: false
  },
  user: {
    userFullName: "Salvador Dali",
    userId: "sadali",
    image: "dali",
    follows: [1],
    likes: []
  },
  explore: {
    posts: []
  },
  home: {
    posts: []
  },
  myPosts: {
    posts: []
  },
  comments: {
    comments: [],
    commentsIsOpen: 0
  },
  resources: {
    posts: [],
    profile: {}
  },
  likes: {
    likes: []
  }
};
