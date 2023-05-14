import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  addStockAtom,
  currentStockAtom,
  deleteStockAtom,
  setCurrentStockAtom,
  stockIdListAtom,
} from "../../atoms/stock";
import { css } from "@emotion/react";

let index = 0;

const StockTab = () => {
  const currentStock = useAtomValue(currentStockAtom);
  const setCurrentStock = useSetAtom(setCurrentStockAtom);

  const idList = useAtomValue(stockIdListAtom);
  const addStock = useSetAtom(addStockAtom);
  const deleteStock = useSetAtom(deleteStockAtom);

  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        {idList.map((id) => (
          <div
            key={id}
            css={css`
              color: ${currentStock === id ? "blue" : "black"};
            `}
            onClick={() => setCurrentStock(id)}
          >
            {id}
            <button onClick={() => deleteStock(id)}>x</button>
          </div>
        ))}
      </div>

      <button onClick={() => addStock((index++).toString())}>+</button>
    </div>
  );
};

export default StockTab;
