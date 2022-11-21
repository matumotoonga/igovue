import { useGameStore } from "@/stores/game";
const game = useGameStore();

export const placeStone = (no: Number): String => {
  if (no == 1 || no > 109 || no < 11 || no % 11 == 0 || no % 11 == 1) return "";

  const status = game.board[no];

  if (status == 1) return "\u26AB";
  if (status == 2) return "\u26AA";
  return "";
};
