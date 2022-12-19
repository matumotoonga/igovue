import { useGameStore } from "@/stores/game";
import { usePlayoutStore } from "@/stores/playout";
import { pMin, pMax, dir4, flipColor } from "@/logic/common";
import { move } from "@/logic/move";

const game = useGameStore();
const playout = usePlayoutStore();

const loopMax: number = 360;
let z: number = 0;
let r: number = 0;

const countScore = (): number => {
  let black: number = 0;
  let white: number = 0;
  for (let i = pMin; i < pMax; i++) {
    const status = game.board[i];
    if (status == 1) black++;
    if (status == 2) white++;
    if (status == 0) {
      for (let j = 0; j < 4; j++) {
        const z = i + dir4[j];
        const around = game.board[z];
        if (around == 1) black++;
        if (around == 2) white++;
        if (around == 1 || around == 2) break;
      }
    }
  }
  console.log("Black = %d White = %d komi = %d", black, white, game.komi);
  if (black > white + game.komi) return 1;
  if (black < white + game.komi) return 2;
  return 0;
};

export const playoutRun = (): void => {
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
  const win = countScore();
  console.log("win = %d", win);
};
