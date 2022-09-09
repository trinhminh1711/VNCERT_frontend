import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
Vue.config.productionTip = false;
const options = {
  timeout: 4000
};
Vue.use(Toast, options);
Vue.mixin({
  created() {
    let perfData = window.performance.timing;
    let estimatedTime = Math.abs(perfData.loadEventEnd - perfData.navigationStart);
    this.loadTime = parseInt((estimatedTime / 1000) % 60) * 100;
    this.doProgress();
  },
  methods: {
    doProgress() {
      let step = this.loadTime / 100;
      this.interval = setInterval(() => {
        this.loadingPercent++;
      }, step);
    },
  },
  computed: {
    loaded() {
      return this.loadingPercent + "%";
    },
  },
  watch: {
    loadingPercent(val) {
      if (val >= 100) {
        clearInterval(this.interval);
      }
    },
  },
  data() {
    return {
      loadingPercent: 0,
      loadTime: 0,
      interval: null,
    };
  },
});
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
