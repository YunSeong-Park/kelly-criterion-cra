import { atom } from "jotai";
import { stockInfoAtom } from "./stocks-info";

export const currentStockAtom = atom<string | undefined>(undefined);

export const setCurrentStockAtom = atom(null, (get, set, update: string) => {
  const idList = get(stockIdListAtom);

  if (!idList.includes(update)) {
    throw Error("존재하지 않는 id입니다.");
  }

  const prevId = get(currentStockAtom);
  if (prevId !== undefined) {
    set(stockInfoAtom(prevId), (prev) => ({ ...prev, selected: false }));
  }

  set(stockInfoAtom(update), (prev) => ({ ...prev, selected: true }));

  set(currentStockAtom, update);
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

  set(stockIdListAtom, update);
  set(setCurrentStockAtom, id);
});
