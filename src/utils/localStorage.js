import links from './link';

export const addUserLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const removeUserLocalStorage = () => {
  localStorage.removeItem('user');
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user');
  const user = result ? JSON.parse(result) : null;
  return user;
};

export const changeLinkActiveLocalStorage = (link) => {
  localStorage.setItem('linkActive', JSON.stringify(link));
};

export const removeLinkActiveLocalStorage = () => {
  localStorage.removeItem('linkActive');
};

export const getLinkActiveFromLocalStorage = () => {
  const result = localStorage.getItem('linkActive');
  const linkActive = result ? JSON.parse(result) : links[0].text;
  return linkActive;
};
