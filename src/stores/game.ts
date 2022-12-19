import { ref } from "vue";
import { defineStore } from "pinia";
import { flipColor } from "@/logic/common";

export const shokiBanmen = [
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
].flat();

export const useGameStore = defineStore("game", () => {
  const komi = ref(7);
  const teban = ref(1); // 手番
  const tekazu = ref(0);
  const kifu = ref<number[]>([]);
  const koZ = ref(0); // コウで打てない位置

  const board = ref(shokiBanmen.concat());
  const utu = (no: number): void => {
    board.value.splice(no, 1, teban.value);
    kifu.value.push(no);
    tekazu.value++;
    teban.value = flipColor(teban.value);
  };
  const start = (): void => {
    teban.value = 1;
    tekazu.value = 0;
    kifu.value.length = 0;
    board.value.splice(0, shokiBanmen.length, ...shokiBanmen);
  };
  return { komi, teban, tekazu, kifu, koZ, board, utu, start };
});
