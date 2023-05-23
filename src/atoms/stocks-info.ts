import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import { focusAtom } from "jotai-optics";
import { currentStockAtom } from "./stock";

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

export const stockInfoAtom = atomFamily((id: string) => {
  const item = atom(initialStockInfo);
  return item;
});

export const stockLabelAtom = atomFamily((id: string) => {
  return focusAtom(stockInfoAtom(id), (optic) =>
    optic.pick(["selected", "name"])
  );
});

export const currentStockInfoAtom = atom(
  (get) => {
    const id = get(currentStockAtom);
    if (id === undefined) {
      return;
    }

    return get(stockInfoAtom(id));
  },
  (get, set, updated: StockInfo) => {
    const id = get(currentStockAtom);
    if (id === undefined) {
      return;
    }

    set(stockInfoAtom(id), updated);
  }
);
