import { updateState } from "redux-jetpack";
import * as loginAPI from "../../server/login";
import * as userAction from "./my-profile"

export async function login(success, service, serviceId) {
  if (!success) return
  const { loggedIn, requiresRegistration, user } = await loginAPI.login(service, serviceId)

  if (user) userAction.getProfile(user.id)

  updateState("auth", state => ({
    loggedIn,
    requiresRegistration
  }));
}
