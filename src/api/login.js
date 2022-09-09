const axios = require("axios").default;
import urls from "../urls/index";
export async function login(username , password) {
  const res = axios.post(urls.login.master, {
    username: username,
    password: password,
  });
  const dataRes = await res;
  if (dataRes.data.login == 1) {
    sessionStorage.clear();
    sessionStorage.setItem("accessToken", dataRes.data.accessToken);
    sessionStorage.setItem("user_id", dataRes.data.user_id);
    sessionStorage.setItem("loginStatus", 1);
    return 1;
  }
  else if (dataRes.data.login == 2) 
  {
    return 2
  }
  return 0;
}