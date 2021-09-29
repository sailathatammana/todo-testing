export function sortByName(list) {
  const sortByName = [...list].sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
  return sortByName;
}

export function sortByPrice(list) {
  const sortByPrice = [...list].sort((a, b) => {
    return a.price - b.price;
  });
  return sortByPrice;
}
