import { atom } from "jotai";
import { stockInfoAtom } from "./stocks-info";

export const currentStockAtom = atom<string | undefined>(undefined);

export const setCurrentStockAtom = atom(null, (get, set, update: string) => {
  const idList = get(stockIdListAtom);

  if (idList.includes(update)) {
    set(currentStockAtom, update);
  }
});

export const stockIdListAtom = atom<string[]>([]);

export const deleteStockAtom = atom(null, (get, set, id: string) => {
  const prev = get(stockIdListAtom);
  const idx = prev.indexOf(id);
  const update = [...prev];

  if (idx !== -1) {
    update.splice(idx, 1);
    stockInfoAtom.remove(id);
    const currentStock = get(currentStockAtom);
    if (currentStock === id) {
      set(currentStockAtom, undefined);
    }
  }

  set(stockIdListAtom, update);
});
export const addStockAtom = atom(null, (get, set, id: string) => {
  const prev = get(stockIdListAtom);
  const update = [...prev];

  update.push(id);

  set(currentStockAtom, id);
  set(stockIdListAtom, update);
});
