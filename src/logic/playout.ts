import { useGameStore } from "@/stores/game";
import { usePlayoutStore } from "@/stores/playout";
import { move } from "@/logic/move";

const game = useGameStore();
const playout = usePlayoutStore();
const pMin: number = 13;
const pMax: number = 110;
const loopMax: number = 360;
let z: number = 0;
let r: number = 0;

const flipColor = (color: number): number => {
  return 3 - color;
};

const countScore = (color: number): number => {
  const score: number = 0;

  return 0;
};

export const playoutRun = (): number => {
  playout.allPlayout++;
  const turnColor = game.teban;
  let color = turnColor;
  playout.beforeZ = -1;
  for (let loop = 0; loop < loopMax; loop++) {
    for (let i = pMin; i < pMax; i++) {
      if (game.board[i] == 0) playout.kouho.push(i);
    }
    for (;;) {
      const m = playout.kouho.length;

      if (playout.kouho.length == 0) {
        z = 0;
      } else {
        r = Math.floor(Math.random() * m);
        z = playout.kouho[r];
      }
      const err = move(z);
      if (err == 0) break;
      playout.kouho.splice(r, 1);
    }
    if (z == 0 && playout.beforeZ == 0) break;
    playout.beforeZ = z;
    color = flipColor(color);
  }
  return turnColor;
};
