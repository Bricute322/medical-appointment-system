import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    register: "",
    login: "",
  },
  getters: {},
  mutations: {
    REGISTER_TESTING(state, payload) {
      state.register = payload;
    },
    LOGIN_FORM(state, logForm) {
      state.login = logForm;
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
    loginForm({ commit }, logForm) {
      Vue.prototype.$axios
        .post(`http://reaper25.pythonanywhere.com/login/`, logForm)
        .then((logs) => {
          console.log("Success", logs.data);
          commit("LOGIN_FORM");
        });
    },
  },
  modules: {},
});
