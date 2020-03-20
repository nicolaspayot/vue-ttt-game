import VueRouter from "vue-router";
import Vue from "vue";
import Board from "../components/Board";
import Lobby from "../components/Lobby";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Lobby
  },
  {
    path: "/game",
    component: Board
  }
];

export default new VueRouter({routes});
