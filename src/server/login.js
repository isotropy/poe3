import db from "./db";

export async function login(service, serviceId) {
  const providerIdentity = db.identities.filter(
    i => i.service === service && i.serviceId === serviceId
  );

  const user = db.users.find(user => user.id === providerIdentity.id)

  return user > 0
    ? {
        loggedIn: true,
        requiresRegistration: false,
        user
        // ,userIdUnavailable: false
      }
    : {
        loggedIn: false,
        requiresRegistration: true
        // ,userIdUnavailable: false
      };
}
