import axios from "axios";
import urls from "../urls/index";
export async function getAllCityVietNam() {
  const city = axios.get("https://provinces.open-api.vn/api/");
  return city;
}

export async function getAllDistrict(cityCode) {
  const district = axios.get("https://provinces.open-api.vn/api/p/" + cityCode, {
    params: {
        depth: 3,
    },
  });
  return district;
}

export async function checkAccountExits(username) {
  const check = axios.get(urls.register.checkExits, {
    params: {
      username: username,
    },
  });
  return check;
}

export async function sendRegister(dataUser) {
  const res = axios.post(urls.register.master, {
    dataUser : dataUser
  });
  const dataRes = await res;
  return dataRes
}