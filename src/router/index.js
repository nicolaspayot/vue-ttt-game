import Vue from "vue";
import VueRouter from "vue-router";
import Lobby from "../components/Lobby";
import Board from "../components/Board";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Lobby },
  { path: "/game", component: Board }
];

export default new VueRouter({
  routes
});
