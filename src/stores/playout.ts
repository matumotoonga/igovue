import { ref } from "vue";
import { defineStore } from "pinia";

export const usePlayoutStore = defineStore("playout", () => {
  const allPlayout = ref(0);
  const beforeZ = ref(-1);
  const loopMax = 360;
  const kouho = ref([]);
  return { allPlayout, beforeZ, loopMax, kouho };
});
