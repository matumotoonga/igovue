import { useGameStore } from "@/stores/game";
import { pMax } from "@/logic/playout";
import { flipColor } from "@/logic/common";

const game = useGameStore();
const checkBoard = Array(pMax);

export type TL = { liberty: number; stone: number };
export const dir4 = [1, -11, -1, 11];

const countLibertySub = (tz: number, color: number, p: TL): void => {
  p.stone++;
  checkBoard[tz] = 1;
  for (let i = 0; i < 4; i++) {
    const z = tz + dir4[i];
    if (checkBoard[z] == 1) continue;
    if (game.board[z] == 0) {
      checkBoard[z] = 1;
      p.liberty++;
    }
    if (game.board[z] == color) countLibertySub(z, color, p);
  }
};

export const countLiberty = (tz: number): TL => {
  const p: TL = { liberty: 0, stone: 0 };
  checkBoard.fill(0);
  countLibertySub(tz, game.board[tz], p);
  return p;
};

export const move = (tz: number): number => {
  const color = game.teban;
  if (tz == 0) {
    game.kifu.push(0);
    game.teban = flipColor(color);
    game.koZ = 1;
    return 0;
  }

  const unCol: number = flipColor(color);
  let space: number = 0;
  let kabe = 0;
  let mikataSafe = 0;
  let takeSum = 0;
  let koKamo = 0;

  const around = [
    { liberty: 0, stone: 0, color: 0 },
    { liberty: 0, Store: 0, color: 0 },
    { liberty: 0, stone: 0, color: 0 },
    { liberty: 0, stone: 0, color: 0 },
  ];
  for (let i = 0; i < 4; i++) {
    around[i].liberty = 0;
    around[i].stone = 0;
    around[i].color = 0;
    const z = tz + dir4[i];
    const c = game.board[z];

    if (c == 0) space++;
    if (c == 3) kabe++;

    if (c == 0 || c == 3) continue;

    const p = countLiberty(z);

    around[i].liberty = p.liberty;
    around[i].stone = p.stone;
    around[i].color = c;

    if (c == unCol && p.liberty == 1) {
      takeSum += p.stone;
      koKamo = z;
    }
    if (c == color && p.liberty >= 2) mikataSafe++;
  }

  if (takeSum == 0 && space == 0 && mikataSafe == 0) return 1;
  if (tz == game.koZ) return 2;
  if (kabe + mikataSafe == 4) return 3;
  if (game.board[tz] != 0) return 4;

  for (let i = 0; i < 4; i++) {
    const z = tz + dir4[i];
    const d = around[i].liberty;
    const c = around[i].color;

    if (c == unCol && d == 1) {
      takeStone(z, unCol);
    }
  }
  game.utu(tz);

  const p = countLiberty(tz);

  if (takeSum == 1 && p.liberty == 1 && p.stone == 1) {
    game.koZ = koKamo;
  } else {
    game.koZ = 0;
  }
  return 0;
};

export const takeStone = (tz: number, color: number): void => {
  game.board.splice(tz, 1, 0);
  for (let i = 0; i < 4; i++) {
    const z = tz + dir4[i];
    if (game.board[z] == color) takeStone(z, color);
  }
};
