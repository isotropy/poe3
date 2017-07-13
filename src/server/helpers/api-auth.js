import db from "../db";

function handleError(identifier, callback) {
  db.errorLog = db.errorLog.concat({
    identifier,
    type: "Failed Authentication",
    stack: callback
  });
  return { error: { code: 420, message: "Unauthorized API Call." } };
};

export async function validate(sessionId, callback, ...args) {
  const session = db.sessions.find(s => s.sessionId === sessionId);
  return session
    ? callback(session.userId, ...args)
    : handleError({ sessionId }, callback);
}
