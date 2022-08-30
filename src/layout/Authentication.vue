<template>
<div>
  <div class="header fixed px-10 d-flex justify-space-between">
      <div class="d-flex align-center">
        <h2><span class="color-dark">VNCERT/</span><span class="color-red">CC</span></h2>
      </div>
      <div class="d-flex align-center">
          <router-link :class="{'active-menu':(this.$route.path=='/login')}" class="border-r px-5 my-0 cusor-pointer" to="/login" tag="p">Sign in</router-link>
          <router-link to="/register" tag="p" :class="{'active-menu':(this.$route.path=='/register')}" class="px-5 my-0 cusor-pointer">Sign up</router-link>
      </div>
  </div>
    <slot></slot>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header{
    height: 8vh;
    background: #fff;
    width: 100%;
    z-index: 999;
    position: relative;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    img {
        width: 100px;
        height: 100%;
        object-fit: contain;
    }
    p
    {
        opacity: 0.6;
    }
}
    .border-r
    {
        border-right: solid 1.5px #ddd;
    }
    .active-menu
    {
        color: #000 !important;
        opacity: 1 !important;
    }
</style>