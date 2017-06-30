export default {
  posts: [],
  auth: {
    sessionId: 1
  },
  user: {
    userFullName: "Salvador Dali",
    id: "sadali",
    follows: [1],
    likes: ["p1", "p2"],
    notifications: [],
    activity: []
  },
  write: {
    haiku: "",
    image: "",
    backgroundColor: "",
    showPalette: false,
    showImageUpload: false
  },
  viewProfile: {
    id: "",
    userFullName: "",
    image: "",
    follows: [],
    likes: []
  },
  menu: {
    visible: true,
    items: [
      { key: "write", text: "Write" },
      { key: "home", text: "Home" },
      { key: "explore", selected: true, text: "Explore" },
      { key: "my-profile", text: "Profile" }
      // { key: "tags", text: "Tags" }
    ]
  }
};
