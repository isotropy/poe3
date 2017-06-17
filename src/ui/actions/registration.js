import * as registrationAPI from "../../server/registration";
import { updateState } from "redux-jetpack";

export async function register(service, serviceId, name, id) {
  id = id.replace(/,/g, "").trim();
  const result = await registrationAPI.register(service, serviceId, name, id);
  updateState("auth", state => result);
}
