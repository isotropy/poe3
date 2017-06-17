import db from "./db";

export async function login(service, serviceId) {
  const user = db.identities.filter(
    i => i.service === service && i.serviceId === serviceId
  );
  return user.length > 0
    ? {
        loggedIn: true,
        requiresRegistration: false,
        userIdUnAvailable: false
      }
    : {
        loggedIn: false,
        requiresRegistration: true,
        userIdUnAvailable: false
      };
}
