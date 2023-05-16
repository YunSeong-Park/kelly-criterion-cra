import { css } from "@emotion/react";
import { useAtom, useSetAtom } from "jotai";
import { stockLabelAtom } from "../../atoms/stocks-info";
import { deleteStockAtom, setCurrentStockAtom } from "../../atoms/stock";
import { memo } from "react";

interface StockTabItemProps {
  id: string;
}

const StockTabItem = ({ id }: StockTabItemProps) => {
  const [stockLabel] = useAtom(stockLabelAtom(id));
  const setCurrentStock = useSetAtom(setCurrentStockAtom);
  const deleteStock = useSetAtom(deleteStockAtom);

  return (
    <div
      css={css`
        color: ${stockLabel.selected ? "blue" : "black"};
      `}
      onClick={() => setCurrentStock(id)}
    >
      {stockLabel.name}
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteStock(id);
        }}
      >
        x
      </button>
    </div>
  );
};

export default memo(StockTabItem);
