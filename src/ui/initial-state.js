export default {
  posts: [],
  auth: {
    sessionId: 0
  },
  login: {
    serviceProvider: "default",
    loginSuccess: false,
    providerId: "",
    name: "",
    id: ""    
  },
  user: {
    // userFullName: "Salvador Dali",
    // id: "sadali",
    // follows: [1],
    // likes: ["p1", "p2"],
    // notifications: [],
    // activities: []
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
    visible: false,
    items: [
      { key: "write", text: "Write" },
      { key: "home", text: "Home" },
      { key: "explore", selected: true, text: "Explore" },
      { key: "my-profile", text: "Profile" }
      // { key: "tags", text: "Tags" }
    ]
  },
  error: {
    code: 0,
    message: ""
  }
};
