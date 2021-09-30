export function sortByTimestampOlderFirst(list) {
  return list.sort((a, b) => a.timestamp - b.timestamp);
}

export function sortByTitle(list) {
  return list.sort((a, b) => a.title.localeCompare(b.title));
}

export function getDone(list) {
  return list.filter((item) => {
    return item.checked === true;
  });
}

export function getTodo(list) {
  return list.filter((item) => {
    return item.checked === false;
  });
}
