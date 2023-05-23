import { atom } from "jotai";
import { StockInfo, currentStockInfoAtom, getYield } from "./stocks-info";

export interface KellyConditionItem {
  percentage: number;
  yield: number;
}

const getKellyConditions = (info: StockInfo): KellyConditionItem[] => {
  return info.priceConditions.map((condition) => ({
    percentage: condition.percentage * 0.01,
    yield: getYield(info.currentPrice, condition.targetPrice),
  }));
};

const getYieldByKelly =
  (kellyConditions: KellyConditionItem[]) => (ratido: number) => {
    return kellyConditions.reduce(
      (acc, condition) =>
        acc * (1 + ratido * condition.yield) ** condition.percentage,
      1
    );
  };

const kellyConditionAtom = atom((get) => {
  const stockInfo = get(currentStockInfoAtom);
  if (stockInfo === undefined) {
    return;
  }

  return getKellyConditions(stockInfo);
});

export const kellyCurveAtom = atom((get) => {
  const kellyConditions = get(kellyConditionAtom);
  if (kellyConditions === undefined) {
    return;
  }

  const yieldFunction = getYieldByKelly(kellyConditions);

  return new Array(101).fill(null).map((_, i) => yieldFunction(i / 100));
});

export const maxPercentageAtom = atom((get) => {
  const kellyCurve = get(kellyCurveAtom);
  if (kellyCurve === undefined) {
    return;
  }

  const max = Math.max(...kellyCurve);
  return kellyCurve.indexOf(max);
});

export const yieldAtom = atom((get) => {
  const kellyCondition = get(kellyConditionAtom);

  if (kellyCondition === undefined) {
    return;
  }

  return (
    kellyCondition.reduce((acc, condition) => {
      return acc + condition.yield * condition.percentage;
    }, 0) * 100
  );
});
