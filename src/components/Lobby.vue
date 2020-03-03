<template>
  <form class="lobby" @submit.prevent="start">
    <div>
      <label>Player 1</label>
      <input type="text" v-model="player1" placeholder="Name for player 1" />
    </div>
    <div>
      <label>Player 2</label>
      <input type="text" v-model="player2" placeholder="Name for player 2" />
    </div>

    <div class="lobby__action">
      <button type="submit" :disabled="!player1 || !player2">Start the game</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      player1: null,
      player2: null
    };
  },
  methods: {
    start() {
      this.$store.commit("player1Name", this.player1);
      this.$store.commit("player2Name", this.player2);
      this.$router.push({ path: "/game" });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.player1 = null;
      vm.player2 = null;
    });
  }
};
</script>
