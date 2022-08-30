import axios from "axios";
import urls from "../urls/index";
export async function getInfoUser(user_id) {
    const infoUser = await axios.get(urls.account.info, {
      params: {
        user_id: user_id,
      },
    });
    return infoUser
  }