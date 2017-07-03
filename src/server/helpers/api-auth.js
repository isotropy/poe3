import db from "../db";
import exception from "../exception";

const errorHandle = () => console.log("Error");

export async function validate(sessionId, callback, ...args) {
  const session = db.sessions.find(s => s.sessionId === sessionId);
  return session ? callback(session.userId, ...args) : errorHandle();
}
