<template>
  <form class="lobby">
    <div>
      <label>Player 1</label>
      <input type="text" placeholder="Name for player 1" />
    </div>
    <div>
      <label>Player 2</label>
      <input type="text" placeholder="Name for player 2" />
    </div>

    <div class="lobby__action">
      <button @click="start" type="submit">Start the game</button>
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    start() {
      this.$router.push("/game");
    }
  }
};
</script>
