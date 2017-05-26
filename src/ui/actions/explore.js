import * as exploreAPI from "../../server/explore";

export function getLatest(user) {
  return exploreAPI.getLatest(user);
}
