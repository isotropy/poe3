import db from "./db";
import idGenerator from "./helpers/id-generator";

export async function register(service, serviceId, name, id) {
  const idExists = db.users.find(user => user.id === id);
  if (idExists)
    return {
      loggedIn: false,
      requiresRegistration: true,
      userIdUnAvailable: true
    };

  db.users = db.users.concat({
    id,
    name,
    image: "",
    follows: "",
    likes: ""
  });
  db.identities = db.identities.concat({ service, serviceId, id });
  return {
    loggedIn: true,
    requiresRegistration: false,
    userIdUnAvailable: false
  };
}
