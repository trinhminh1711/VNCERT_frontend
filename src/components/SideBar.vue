<template>
  <div :class="{'bg-admin' : this.$store.state.role == 1 , 'bg-user' : this.$store.state.role == 0}" class="sidebar pl-7">
    <img class="logo" src="../../public/img/logo.png" alt="" />
    <div>
      <ul class="menu">
        <li class="d-flex align-center active"><v-icon class="mr-2">mdi-view-dashboard</v-icon> Dash Board</li>
        <li>
          <span> Quản lý người dùng </span>
          <ul class="sub-menu">
            <li>Xem danh sách</li>
            <li>Khóa tài khoản</li>
          </ul>
        </li>
        <li>
          <span> Quản lý khóa học </span>
          <ul class="sub-menu">
            <li>Thêm mới khóa học</li>
            <li>Xem danh sách khóa học</li>
            <li>Xem danh sách tài khoản</li>
          </ul>
        </li>
        <li>
          <span> Quản lý comment </span>
          <ul class="sub-menu">
            <li>Thêm mới blacklist</li>
            <li>Xem danh sách blacklist</li>
          </ul>
        </li>
        <li><v-icon class="mr-2">mdi-account-circle</v-icon> Tài khoản của tôi</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg-admin
{
  background: #fecaca;
}
.bg-user
{
  background: #bfdbfe;
}
.sidebar {
  min-height: 100vh;
  .logo {
    width: 150px;
  }
  .menu {
    padding-left: 0;
  }
  ul {
    list-style-type: none;
  }
  .menu > li {
    margin-bottom: 1rem;
    padding: .3rem 0;
  }
  .menu li span {
    font-size: 16px;
    color: rgb(165, 156, 156);
  }
  .sub-menu {
    font-size: 14px;
    li {
      padding: 0.5rem 0;
    }
  }
  .active {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        right: 0;
        height: 100%;
        width: 5px;
        background: #002960;
      }
    }
}
</style>
