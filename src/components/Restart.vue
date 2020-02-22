<template>
  <div class="game__action">
    <button @click="onClick">Restart game</button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>
