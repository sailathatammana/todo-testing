export function validateTitle(title) {
  if (title === "" || title.trim().length < 3 || !isNaN(title)) {
    return false;
  } else return true;
}
