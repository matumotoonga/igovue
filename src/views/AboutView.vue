<script setup lang="ts">
import { countLiberty } from "@/logic/move";

const test = () => {
  const p = countLiberty(25);
  console.log("dame=%d ishi=%d", p.liberty, p.stone);
};
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div style="position: relative">
      <img src="白石.png" width="60" height="60" alt="黒石" />
      <div style="position: absolute; top: 8px; left: 15px">100</div>
    </div>
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
