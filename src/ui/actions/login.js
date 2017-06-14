import * as loginAPI from "../../server/login";
import { updateState } from "redux-jetpack";

export async function login(success, service, serviceId) {
  if (!success) return
  const { loggedIn, requiresRegistration } = await loginAPI.login(service, serviceId)

  updateState("auth", state => ({
    loggedIn,
    requiresRegistration
  }));
}
