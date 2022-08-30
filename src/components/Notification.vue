<template>
  <div>
    <div @click="activeDialog = true" class="d-flex cusor-pointer align-center gap-xl notification mt-7">
      <p class="date">2022/08/28</p>
      <p class="animate__animated animate__fadeIn animate__infinite animate__slow">Chào mừng bạn đến với ứng dụng quản lý vườn ươm . Xem ngay khóa học phù hợp với bạn!</p>
    </div>
    <Dialog :active="activeDialog" :content="content" :title="title" @accept-popup="hiddenPopup" />
  </div>
</template>

<script>
import Dialog from "../components/Dialog.vue";
export default {
  components: {
    Dialog,
  },
  data() {
    return {
      activeDialog: false,
      title: "Hệ thống quản lý vườn ươm",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    };
  },
  methods:{
    hiddenPopup(e)
    {
      this.activeDialog  = e
    }
  }
};
</script>

<style lang="scss" scoped>
.notification {
  padding: 1.3rem 0.7rem;
  background-color: #adc8eb;
  border-radius: 5px;
  .date {
    opacity: 0.6;
  }
  p {
    margin: 0;
  }
}
</style>
