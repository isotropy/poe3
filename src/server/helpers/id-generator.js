export default addendum =>
  addendum + new Array(2).join(Math.random().toString(16).substring(2));
