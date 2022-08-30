<template>
  <v-app>
    <v-main>
      <div  v-if="loadingPercent < 100" class="process-caculator">
        <div class="process-bar">
          <v-progress-linear color="#002960" :value="loadingPercent"></v-progress-linear>
        </div>
      </div>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
@import "./styles/mixin.scss";
@import "./styles/style.scss";
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
.process-caculator
{
  position: absolute;
  width: 100%;
  top: 0;
}
</style>
