import { useGameStore } from "@/stores/game";
import { pMin, pMax } from "@/logic/common";

const game = useGameStore();

export const placeStone = (no: number): string => {
  if (no < pMin || no >= pMax || no % 11 == 0 || no % 11 == 1) return "";

  const color = game.board[no];

  if (color == 1) return "\u26AB";
  if (color == 2) return "\u26AA";
  return "";
};
