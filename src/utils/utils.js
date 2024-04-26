export const isAlreadyFavorite = (id, favorites) => {
  return favorites.some(el => el._id === id);
};

export const formattedPrice = price => {
  return `${price},00`;
};

export const shortenText = text => {
  return text.slice(0, 55);
};

export const capitalizeFirstLetter = text => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const disableScrolling = isModalShowing => {
  if (isModalShowing) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
};

export const getTodayFormatted = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};
