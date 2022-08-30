<template>
  <div class="d-flex">
    <div class="col-18-persent">
      <SideBar />
    </div>
    <div class="flex-1 px-5 bg-gray">
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
.col-18-persent
{
    width: 18%;
}
.flex-1
{
    flex: 1;
}
.bg-gray
{
  background: rgb(245, 240, 240);
}
</style>
