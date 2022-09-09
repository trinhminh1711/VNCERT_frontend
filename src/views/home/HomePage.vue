<template>
  <div>
    <DashBoard>
      <transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
        <div class="main-layout">
          <router-view class="view animate__animated animate__fadeIn animate__slow" />
        </div>
      </transition>
    </DashBoard>
  </div>
</template>

<script>
import * as accountAPI from "../../api/account";
import DashBoard from "../../layout/DashBoard.vue";
import DashBoardPage from "./dashboard/DashBoard.vue";
export default {
  components: {
    DashBoard,
    Notification,
    DashBoardPage,
  },
  async mounted() {
    let userInfo = await accountAPI.getInfoUser(sessionStorage.getItem("user_id"));
    this.$store.commit("setUserName", userInfo.data.username);
    this.$store.commit("setRole", userInfo.data.role);
  },
};
</script>

<style lang="scss">
.row {
  margin-top: 0;
}
.main-layout
{
  margin-bottom: 5rem;
}
</style>
