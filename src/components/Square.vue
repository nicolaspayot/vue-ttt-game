<template>
  <div class="game__box" @click="onClick" :class="{ 'game__box--x': value === 'X', 'game__box--o': value === 'O' }">
    <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style></style>
