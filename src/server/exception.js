export default function(msg) {
  if (msg instanceof Error) {
    throw msg
  } else {
    throw new Error(msg);
  }
}
