export function trimName(string) {
  const newString = string.substring(0, string.indexOf(" "));
  return newString;
}

export function removeDashes(string) {
  const newString = string.replace(/-/g, " ");
  return newString;
}
