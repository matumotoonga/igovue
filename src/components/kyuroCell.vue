<script setup lang="ts">
import { placeStone } from "@/logics/placeStone";
import { move, countDame, takeStone } from "@/logics/move";
import { useGameStore } from "@/stores/game";

const props = defineProps<{
  No: number;
}>();

const game = useGameStore();

const no = props.No;

const clickCell = () => {
  const status = game.board[no];
  if (status == 0) {
    move(no);
  } else {
    const p = countDame(no);
    console.log("tz=%d dame=%d ishi=%d", no, p.dame, p.ishi);
  }
};

const clickRight = () => {
  const color = game.board[no];

  console.log("no = %d color = %d", no, color);
  if (color == 1 || color == 2) {
    takeStone(no, color);
  }
};
</script>

<template>
  <div class="kyuroCell" @click="clickCell" @click.right="clickRight">
    <div class="stone">
      {{ placeStone(no) }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.kyuroCell {
  width: 100%;
  height: 100%;
  // border: 1px solid gray;

  .stone {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 60px;
  }
}
</style>
