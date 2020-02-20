<template>
  <div class="game">
    <div class="game__board">
      <div class="game__box">
        <span>{{ squares[0] }}</span>
      </div>
      <div class="game__box">
        <span>{{ squares[1] }}</span>
      </div>
      <div class="game__box">
        <span>{{ squares[2] }}</span>
      </div>
      <div class="game__box">
        <span>{{ squares[3] }}</span>
      </div>
      <div class="game__box">
        <span>{{ squares[4] }}</span>
      </div>
      <div class="game__box">
        <span>{{ squares[5] }}</span>
      </div>
      <div class="game__box">
        <span>{{ squares[6] }}</span>
      </div>
      <div class="game__box">
        <span>{{ squares[7] }}</span>
      </div>
      <div class="game__box">
        <span>{{ squares[8] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      player: "X",
      squares: Array(9).fill(null)
    };
  }
};
</script>
