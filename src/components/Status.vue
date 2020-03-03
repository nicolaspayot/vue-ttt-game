<template>
  <div class="game__status">
    <span v-if="winner">Winner is {{ winnerName }}</span>
    <span v-else-if="isDrawGame">That's a draw</span>
    <span v-else>Next player is {{ playerName }}</span>
  </div>
</template>

<script>
function playerName(player, { state }) {
  return player === "X" ? state.player1Name : state.player2Name;
}

export default {
  props: {
    winner: String,
    player: String,
    isDrawGame: Boolean
  },
  computed: {
    playerName() {
      return playerName(this.player, this.$store);
    },
    winnerName() {
      return playerName(this.winner, this.$store);
    }
  }
};
</script>
