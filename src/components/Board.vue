<template>
  <div class="game">
    <Status :winner="winner.player" :player="player" :isDrawGame="isDrawGame" />
    <div class="game__board">
      <Square
        v-for="(square, position) in squares"
        :key="position"
        :value="square"
        :isGameOver="isGameOver"
        :isWinner="isSquareWinner(position)"
        @click="onSquareClick(position)"
      />
    </div>
    <Restart @click="restartGame" />
  </div>
</template>

<script>
import getWinner from "../utils/winner";
import Status from "./Status";
import Square from "./Square";
import Restart from "./Restart";

export default {
  components: {
    Status,
    Square,
    Restart
  },
  data() {
    return {
      player: "X",
      squares: Array(9).fill(null)
    };
  },
  computed: {
    winner() {
      return getWinner(this.squares);
    },
    isDrawGame() {
      return this.squares.filter(val => val === null).length === 0;
    },
    isGameOver() {
      return this.winner.player !== null || this.isDrawGame;
    }
  },
  methods: {
    isSquareEmpty(position) {
      return this.squares[position] === null;
    },
    isSquareWinner(position) {
      return this.winner.positions.includes(position);
    },
    onSquareClick(position) {
      if (!this.isSquareEmpty(position) || this.winner.player) {
        return;
      }
      this.$set(this.squares, position, this.player);
      this.player = this.player === "X" ? "O" : "X";
    },
    restartGame() {
      this.player = "X";
      this.squares = Array(9).fill(null);
      this.$store.commit("clear");
      this.$router.push({ path: "/" });
    }
  }
};
</script>
