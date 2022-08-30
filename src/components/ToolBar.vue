<template>
  <div class="d-flex align-center justify-space-between py-5 toolbar">
    <h2><span class="color-dark">VNCERT/</span><span class="color-red">CC</span></h2>
    <div class="d-flex">
      <div class="account-image d-flex align-center">
        <img src="../../public/img/account.png" alt="" />
        <span class="ml-3">Xin chào {{this.$store.state.username}}</span>
      </div>
      <div class="logout d-flex align-center">
        <span @click="logout" class="ml-3 cusor-pointer">Đăng xuất <v-icon>mdi-logout</v-icon></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
}
.account-image img {
  width: 35px;
}
.logout {
  margin-left: 4rem;
}
</style>
