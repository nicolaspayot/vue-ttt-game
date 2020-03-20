<template>
  <div
    class="game__box"
    @click="onClick"
    :class="{
      'game__box--x': value === 'X',
      'game__box--o': value === 'O',
      'game__box--over': isGameOver,
      'game__box--winner': isWinner
    }"
  >
    <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    isGameOver: Boolean,
    isWinner: Boolean
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style></style>
