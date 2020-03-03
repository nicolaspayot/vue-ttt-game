import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    player1: null,
    player2: null
  },
  mutations: {
    clear(state) {
      state.player1 = null;
      state.player2 = null;
    },
    player1Name(state, value) {
      state.player1Name = value;
    },
    player2Name(state, value) {
      state.player2Name = value;
    }
  },
  actions: {},
  modules: {}
});
