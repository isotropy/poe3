import * as registrationAPI from "../../server/registration";
import { updateState } from "redux-jetpack";

export async function register(service, serviceId, name) {
  const result = await registrationAPI.register(service, serviceId, name)

  updateState("auth", state => result);
}
