export function validateTitle(title) {
  if (title === "" || title.trim().length < 3) {
    return false;
  } else return true;
}
