export default {
  menu: {
    visible: true,
    items: [
      { key: "write", text: "Write" },
      { key: "home", text: "Home" },
      { key: "explore", selected: true, text: "Explore" },
      { key: 'profile', text: 'Profile' }
      // { key: "tags", text: "Tags" }
    ]
  },
  auth: {
    loggedIn: true,
  },
  user: {
    id: 2,
    name: 'Salvador Dali',
    image: 'dali',
    follows: [ 1 ],
    likes: [ ]
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
  }
};
