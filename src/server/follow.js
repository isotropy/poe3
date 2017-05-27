import db from "./db";

export async function follow(user, toFollow) {
  db.profiles = db.profiles
  .map(profile => profile.id === user.id && !profile.follows.includes(toFollow)
    ? { ...profile, follows: profile.follows.concat(toFollow) }
    : profile)
}
