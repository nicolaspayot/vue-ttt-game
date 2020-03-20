<template>
  <div class="game">
    <Status :winner="winner.player" :player="player" :isDrawGame="isDrawGame" />
    <div class="game__board">
      <Square
        v-for="(squareValue, position) in squares"
        :key="position"
        :value="squareValue"
        @click="onSquareClick(position)"
      />
    </div>
  </div>
</template>

<script>
import Status from "./Status";
import Square from "./Square";
import getWinner from "../utils/winner";

export default {
  components: {
    Status,
    Square
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
      return this.squares.filter(square => !square).length === 0;
    }
  },
  methods: {
    onSquareClick(position) {
      if (this.squares[position]) {
        return;
      }
      this.$set(this.squares, position, this.player);
      this.player = this.player === "X" ? "O" : "X";
    }
  }
};
</script>
