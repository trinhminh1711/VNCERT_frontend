import axios from "axios";
import urls from "../urls/index";
export async function updateAvatarUser(formData) {
  const updateRes = await axios({
    method: "post",
    url: urls.account.updateAvatar,
    data: formData,
    headers: {
      "Content-Type": `multipart/form-data`,
    },
  });
  return updateRes;
}
export async function getInfoUser(user_id) {
  const infoUser = await axios.get(urls.account.info, {
    params: {
      user_id: user_id,
    },
  });
  return infoUser;
}
export async function getAllInfoUser(user_id) {
  const infoUser = await axios.get(urls.account.userInfo, {
    params: {
      user_id: user_id,
    },
  });
  return infoUser;
}

export async function getAllUser() {
  const listUser = await axios.get(urls.user.listUser);
  return listUser;
}

export async function lockAccountUser(user_id) {
  const lockAccountRes  = axios.put(urls.account.lockAcount + user_id, {
    user_id : user_id
  });  return lockAccountRes;
}

export async function unlockAccountUser(user_id) {
  const lockAccountRes  = axios.put(urls.account.unlockAcount + user_id, {
    user_id : user_id
  });  return lockAccountRes;
}