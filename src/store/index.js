import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { register: "" },
  getters: {},
  mutations: {
    REGISTER_TESTING(state, payload) {
      state.register = payload;
    },
  },
  actions: {
    registerForm({ commit }, payload) {
      Vue.prototype.$axios
        .post(`http://reaper25.pythonanywhere.com/register/`, payload)
        .then((shesh) => {
          console.log("Im Here", shesh.data);
          commit("REGISTER_TESTING");
        });
    },
  },
  modules: {},
});
