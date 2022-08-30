<template>
  <div class="d-flex align-center flex-column">
    <img src="../../public/img/404.png" alt="" />
    <h2 class="font-weight-black text-uppercase">404 Page not found</h2>
     <router-link to="/" tag="p"><v-btn class="ma-2 mt-5" outlined color="indigo"> <v-icon class="mr-2">mdi-home</v-icon> Về trang chủ </v-btn></router-link>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
img {
  width: 400px;
  margin-top: 2rem;
}
</style>
