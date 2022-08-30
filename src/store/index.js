import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "username",
    role: 0,
  },
  getters: {},
  mutations: {
    setUserName(state , username) {
      state.username = username;
    },
    setRole(state , role)
    {
      state.role = role
    }
  },
  actions: {},
  modules: {},
});
