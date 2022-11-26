<script setup lang="ts">
import { countLiberty } from "@/logic/move";

const test = () => {
  const p = countDame(25);
  console.log("dame=%d ishi=%d", p.dame, p.ishi);
};
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button id="test" @click="test">TEST</button><br />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
