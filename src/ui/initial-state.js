export default {
  posts: [],
  auth: {
    sessionId: "2093409"
  },
  login: {
    serviceProvider: "google",
    loginSuccess: true,
    providerId: "blah",
    name: "LALA",
    id: "dada"
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
