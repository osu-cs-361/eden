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

export const sendUserData = async (endpoint, { email, password }) => {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + endpoint, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const data = await response.json();
    if (data.token) {
      return data.token;
    } else {
      return null;
    }
  }
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
