const urls = {
  login: {
    master: "http://192.168.19.165:3000/login",
  },
  register: {
    master: "http://192.168.19.165:3000/register",
    checkExits: "http://192.168.19.165:3000/check-account-exits",
  },
  user:{
    listUser : "http://192.168.19.165:3000/list-user"
  },
  account: {
    info: "http://192.168.19.165:3000/account-info",
    userInfo: "http://192.168.19.165:3000/user",
    updateAvatar : "http://192.168.19.165:3000/user-update-avatar",
    lockAcount : "http://192.168.19.165:3000/lock-account/",
    unlockAcount : "http://192.168.19.165:3000/unlock-account/"
  },
  course :{
    listCourse : "http://192.168.19.165:3000/list-course",
    detailCourse : "http://192.168.19.165:3000/detail-course/",
    createCourse : "http://192.168.19.165:3000/create-course"
  }
};
export default urls;
