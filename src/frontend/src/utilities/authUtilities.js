export const authCookieExists = () => {
  return getCookie("eden_authorization").length !== 0;
};

export const getAuthCookie = () => {
  return getCookie("eden_authorization");
};

export const setAuthCookie = (token) => {
  setCookie("eden_authorization", token, 1);
};

export const deleteAuthCookie = () => {
  setCookie("eden_authorization", "", -1);
};

const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookieArray = decodedCookie.split(";");
  for (let cookie of cookieArray) {
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
};
