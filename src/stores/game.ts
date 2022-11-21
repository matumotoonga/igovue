import { ref } from "vue";
import { defineStore } from "pinia";

export const useGameStore = defineStore("game", () => {
  const komi = ref(7);
  const teban = ref(1); // 手番
  const tekazu = ref(0);
  const kifu = ref([]);
  const koZ = ref(0); // コウで打てない位置
  const allPlayout = ref(0);

  const arr = [
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
  const arr2 = arr.concat();

  const board = ref(arr2);
  const flipColor = (color: number): number => {
    return 3 - color;
  };
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
    board.value.splice(0, arr2.length, ...arr);
  };
  return { komi, teban, tekazu, kifu, koZ, allPlayout, board, utu, start };
});
