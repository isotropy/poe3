export default {
  posts: [],
  auth: {
    loggedIn: true,
    requiresRegistration: false,
    userIdUnAvailable: false
  },
  user: {
    user: {
      userFullName: "Salvador Dali",
      id: "sadali",
      follows: [1],
      likes: []
    },
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
