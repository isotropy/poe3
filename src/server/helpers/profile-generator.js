import db from "../db";

const profileGenerator = name => {
  const profile = name.toLowerCase().split(" ").join("_");
  return db.users.find(u => u.profile === profile)
    ? profileGenerator(name + Math.random().toString(16).substring(10))
    : profile;
};

export default profileGenerator;
