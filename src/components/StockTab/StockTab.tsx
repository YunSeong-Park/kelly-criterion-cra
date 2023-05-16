import { useAtomValue, useSetAtom } from "jotai";
import { addStockAtom, stockIdListAtom } from "../../atoms/stock";
import { css } from "@emotion/react";
import StockTabItem from "./StockTabItem";

let index = 0;

const StockTab = () => {
  const idList = useAtomValue(stockIdListAtom);
  const addStock = useSetAtom(addStockAtom);

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
          <StockTabItem id={id} key={id} />
        ))}
      </div>

      <button onClick={() => addStock((index++).toString())}>+</button>
    </div>
  );
};

export default StockTab;
