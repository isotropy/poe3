export default function randomString(
  prefix = "",
  length = 24,
  options = { lowerCase: true, upperCase: true, numeric: true }
) {
  const chars =
    (options.numeric ? "0123456789" : "") +
    (options.lowerCase ? "abcdefghijklmnopqrstuvwxyz" : "") +
    (options.upperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "");

  var result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return prefix + result;
}
