<template>
  <div>
    <DashBoard>
    <div class="main-layout">
      <router-view/>
    </div>
    </DashBoard>
  </div>
</template>

<script>
import * as accountAPI from '../../api/account'
import DashBoard from "../../layout/DashBoard.vue";
export default {
  components: {
    DashBoard,
    Notification,
  },
  async mounted()
  {
    let userInfo = await accountAPI.getInfoUser(sessionStorage.getItem("user_id"))
    this.$store.commit('setUserName' , userInfo.data.username);
    this.$store.commit('setRole' , userInfo.data.role);
  }
};
</script>

<style lang="scss" scoped>

</style>
