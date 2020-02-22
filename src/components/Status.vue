<template>
  <div class="game__status">
    <span v-if="winner">Winner is {{ winner }}</span>
    <span v-else-if="isDrawGame">That's a draw</span>
    <span v-else>Next player is {{ player }}</span>
  </div>
</template>

<script>
export default {
  props: {
    winner: String,
    player: String,
    isDrawGame: Boolean
  }
};
</script>
