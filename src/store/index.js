import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    player1Name: null,
    player2Name: null
  },
  mutations: {
    clear(state) {
      state.player1Name = null;
      state.player2Name = null;
    },
    player1Name(state, value) {
      state.player1Name = value;
    },
    player2Name(state, value) {
      state.player2Name = value;
    }
  }
});
