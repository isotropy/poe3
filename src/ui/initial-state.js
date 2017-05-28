export default {
  menu: {
    visible: true,
    items: [
      { key: "write", text: "Write" },
      { key: "home", text: "Home" },
      { key: "explore", selected: true, text: "Explore" },
      // { key: "tags", text: "Tags" }
    ]
  },
  auth: {
    loggedIn: false,
  },
  explore: {
    posts: []
  },
  home: {
    posts: []
  }
};
