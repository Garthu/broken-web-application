function setCookie(name, value, exp) {
  const expDate = new Date();
  expDate.setTime(expDate.getTime() + (exp * 24 * 60 * 60 * 1000));

  const expDateBR = expDate.toGMTString();

  document.cookie = `${name}=${value}; expires=${expDateBR}; path=/`;
}

export default setCookie;