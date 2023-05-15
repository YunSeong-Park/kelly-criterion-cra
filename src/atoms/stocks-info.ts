import { atom, useAtomValue, useSetAtom } from "jotai";
import { atomFamily } from "jotai/utils";

export interface StockInfo {
  name: string;
  currentPrice: number;
  priceConditions: PriceCondition[];
  periodWeight: number;
}

interface PriceCondition {
  targetPrice: number;
  percentage: number;
}

export const getYield = (currentPrice: number, targetPrice: number) => {
  return (targetPrice - currentPrice) / currentPrice;
};

const initialStockInfo: StockInfo = {
  name: "",
  currentPrice: 0,
  priceConditions: [],
  periodWeight: 1,
};

export const stockInfoAtom = atomFamily(() => {
  return atom(initialStockInfo);
});
