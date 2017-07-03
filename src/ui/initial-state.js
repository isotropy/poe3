export default {
  posts: [],
  auth: {
    sessionId: "1"
  },
  login: {
    serviceProvider: "default",
    loginSuccess: false,
    providerId: "",
    name: "",
    id: ""
  },
  user: {
    userFullName: "Matsuo Bashō",
    id: "basho",
    follows: ["issa"],
    likes: ["p1", "p5"],
    notifications: [],
    activities: []
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
  },
  error: {
    code: 0,
    message: ""
  }
};
