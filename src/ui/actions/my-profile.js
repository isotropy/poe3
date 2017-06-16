import * as myProfileAPI from "../../server/my-profile";
import { updateState } from "redux-jetpack";

export async function getProfile(userId) {
  const results = await myProfileAPI.getProfile(userId);
  updateState("user", state => ({ ...results }));
}
