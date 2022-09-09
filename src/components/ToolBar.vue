<template>
  <div class="d-flex align-center justify-space-between py-5 toolbar">
    <h2><span class="color-dark">VNCERT/</span><span class="color-red">CC</span></h2>
    <div class="d-flex">
      <div class="account-image d-flex align-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <p class="mb-0 d-flex align-center" v-bind="attrs" v-on="on">
              <img class="rounded-circle" :src="'' + user.avatar" alt="" />
            </p>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title> <router-link :to="{ name: 'profile' }" tag="button">Quản lý tài khoản</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link :to="{ name: 'CourseList' }" tag="button">Quản lý khóa học</router-link></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <span class="ml-3">Xin chào {{ this.$store.state.username }}</span>
      </div>
      <div class="logout d-flex align-center">
        <span @click="logout" class="ml-3 cusor-pointer">Đăng xuất <v-icon>mdi-logout</v-icon></span>
      </div>
    </div>
  </div>
</template>

<script>
import * as accountAPI from "../api/account";
export default {
  data() {
    return {
      user: {},
    };
  },
  async created() {
    let userInfo = await accountAPI.getAllInfoUser(sessionStorage.getItem("user_id"));
    this.$store.commit("setUserName", userInfo.data.username);
    this.$store.commit("setRole", userInfo.data.role);
    this.user = userInfo.data;
    console.log(this.user);
  },
  methods: {
    logout: function () {
      sessionStorage.clear();
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style lang="scss" scoped>
.toolbar {
  border-bottom: solid 1px rgb(189, 187, 187);
  position: sticky;
  background: rgb(245, 240, 240);
  padding: 0 1rem;
  top: 0;
  z-index: 999;
}
.account-image img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
.logout {
  margin-left: 4rem;
}
.v-btn--is-elevated {
  box-shadow: none;
}
</style>
