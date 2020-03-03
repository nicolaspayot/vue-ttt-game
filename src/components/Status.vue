<template>
  <div class="game__status">
    <span v-if="winner">Winner is {{ winnerName }}</span>
    <span v-else-if="isDrawGame">That's a draw</span>
    <span v-else>Next player is {{ playerName }}</span>
  </div>
</template>

<script>
export default {
  props: {
    winner: String,
    player: String,
    isDrawGame: Boolean
  },
  computed: {
    playerName() {
      return this.player === "X" ? this.$store.state.player1Name : this.$store.state.player2Name;
    },
    winnerName() {
      return this.winner === "X" ? this.$store.state.player1Name : this.$store.state.player2Name;
    }
  }
};
</script>
