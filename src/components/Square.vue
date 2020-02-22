<template>
  <div
    class="game__box"
    :class="{
      'game__box--x': value === 'X',
      'game__box--o': value === 'O',
      'game__box--over': isGameOver,
      'game__box--winner': isWinner
    }"
    @click="onClick"
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
