<template>
  <div class="px-2">
    <h2 class="mt-10 text-title">Quản lý tài khoản</h2>
    <div class="list-item d-flex">
      <div>
        <p>Danh sách tài khoản</p>
        <v-icon>mdi-plus</v-icon>
      </div>
      <div>
        <p>Thông tin tài khoản</p>
        <v-icon>mdi-plus</v-icon>
      </div>
    </div>
    <h2 class="mr-0 text-title">Quản lý khóa học</h2>
    <div class="list-item d-flex">
      <div>
        <p>Danh sách khóa học</p>
        <v-icon>mdi-plus</v-icon>
      </div>
      <div>
        <p>Thông tin khóa học</p>
        <v-icon>mdi-plus</v-icon>
      </div>
      <div>
        <p>Thông tin group khóa học</p>
        <v-icon>mdi-plus</v-icon>
      </div>
    </div>
    <h2 class="mr-0 text-title">Quản lý bình luận</h2>
    <div class="list-item d-flex">
      <div>
        <p>Danh sách blacklist</p>
        <v-icon>mdi-plus</v-icon>
      </div>
      <div>
        <p>Quản lý blacklist</p>
        <v-icon>mdi-plus</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.list-item {
  gap: 20px;
  margin: 1rem 0 2rem 0;
  p {
    margin: 0;
    font-size: 14px;
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: calc((100% / 3) - 20px);
    padding: 0 1rem;
    height: 75px;
    transition: all .2s ease-in-out;
    &:hover {
      cursor: pointer;
      background: #002960;
      p,
      i {
        color: #fff;
      }
    }
  }
}
</style>
