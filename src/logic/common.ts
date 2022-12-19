export const pMin: number = 13; // 盤面検索Min
export const pMax: number = 110; // 盤面検索Max
export const bSize: number = 9;
export const bWidth: number = bSize + 2;
export const dir4 = [1, -bWidth, -1, bWidth];

export const flipColor = (color: number): number => {
  return 3 - color;
};
