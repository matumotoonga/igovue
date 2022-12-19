<script setup lang="ts">
import kyuroCell from "./kyuroCell.vue";
import { useGameStore } from "@/stores/game";
import { playoutRun } from "@/logic/playout";

const game = useGameStore();

const Run = (): void => {
  playoutRun();
};
const start = (): void => {
  game.start();

  console.log("tekazu = %d", game.tekazu);
};
</script>

<template>
  <div>
    九路盤 手数:{{ game.tekazu }} 手番: {{ game.teban }} <br />

    <div class="GameBoard">
      <div class="board">
        <div class="cell" v-for="cellNo in 121" :key="cellNo">
          <kyuroCell :No="cellNo" />
        </div>
      </div>
    </div>
  </div>
  <button id="start" @click="start">初期化</button>
  <button id="run" @click="Run">プレイアウト</button><br />
  <div></div>

  棋譜
  <div class="kifu">{{ game.kifu.join() }}</div>
</template>

<style lang="scss" scoped>
.GameBoard {
  width: 567px;
  height: 567px;
  background-image: url(/九路盤.png);
  .board {
    display: grid;
    grid-template-columns: 8px 60px 60px 60px 60px 60px 60px 60px 60px 60px 3px;
    grid-template-rows: 1px 60px 60px 60px 60px 60px 60px 60px 60px 60px 3px;
    gap: 1px;
  }
}
.kifu {
  width: 565px;
  height: 150px;
  border: 1px solid gray;
  overflow-wrap: break-word;
}
</style>
