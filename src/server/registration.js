import db from "./db";
import idGenerator from "./helpers/id-generator";
import profileGenerator from "./helpers/profile-generator";

export async function register(service, serviceId, name) {
  const id = idGenerator();
  db.users = db.users.concat({
    id,
    name,
    profile: profileGenerator(name),
    image: "",
    follows: "",
    likes: ""
  });
  console.log(db.users);
  db.identities = db.identities.concat({ service, serviceId, id });

  return { loggedIn: true, requiresRegistration: false };
}
