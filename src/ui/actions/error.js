import { updateState } from "redux-jetpack";

export async function ackError() {
  updateState("error", state => ({ code: 0, message: "" }));
}
