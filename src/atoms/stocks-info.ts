import { atom, useAtomValue, useSetAtom } from "jotai";
import { atomFamily } from "jotai/utils";
import { focusAtom } from "jotai-optics";

export interface StockInfo {
  name: string;
  currentPrice: number;
  priceConditions: PriceCondition[];
  periodWeight: number;
  selected: boolean;
}

interface PriceCondition {
  targetPrice: number;
  percentage: number;
}

export const getYield = (currentPrice: number, targetPrice: number) => {
  return (targetPrice - currentPrice) / currentPrice;
};

const initialStockInfo: StockInfo = {
  name: "종목",
  currentPrice: 0,
  priceConditions: [],
  periodWeight: 1,
  selected: true,
};

export const stockInfoAtom = atomFamily(
  (id: string) => {
    const item = atom(initialStockInfo);
    return item;
  },
  (a, b) => a === b
);

export const stockLabelAtom = atomFamily(
  (id: string) => {
    return focusAtom(stockInfoAtom(id), (optic) =>
      optic.pick(["selected", "name"])
    );
  },
  (a, b) => a === b
);
