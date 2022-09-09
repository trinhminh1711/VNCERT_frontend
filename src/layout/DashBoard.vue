<template>
  <div>
    <div class="col-18-persent">
      <SideBar />
    </div>
    <div class="col-82-persent px-5 bg-gray">
      <ToolBar />
      <Notification />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import ToolBar from "../components/ToolBar.vue";
import Notification from "../components/Notification.vue";
export default {
  components: {
    SideBar,
    ToolBar,
    Notification,
  },
};
</script>

<style lang="scss" scoped>
.col-18-persent {
  width: 18%;
  position: fixed;
  float: left;
}
.col-82-persent {
  width: 82%;
  float: right;
}
.bg-gray {
  background: rgb(245, 240, 240);
}
</style>
