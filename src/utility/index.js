export const isAuthenticated = () => {
  if (typeof window == undefined) {
    return false;
  }
  if (localStorage.getItem("userId")) {
    const id = JSON.parse(localStorage.getItem("userId"));
    if (id > 0 && id < 11) {
      console.log(id);
      return id;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const getRandomBetween = (f, t) =>
  Math.floor(Math.random() * (t - f) + f);

export const cvs_fetch = async (url) => {
  let data = await fetch(url);
  data = await data.json();
  return data;
};
