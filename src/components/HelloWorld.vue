<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="greetings">
    <h3 class="green">{{ msg }}</h3>
  </div>
</template>
