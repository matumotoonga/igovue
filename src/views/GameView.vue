<script setup lang="ts">
import kyuroBan from "../components/kyuroBan.vue";
</script>

<template>
  <div class="game">
    <kyuroBan />
  </div>
</template>

<style>
@media (min-width: 2048px) {
  .game {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
