import { useAtom } from "jotai";
import { currentStockInfoAtom } from "../../atoms/stocks-info";
import { css } from "@emotion/react";

const rowStyle = css`
  display: flex;
`;

const StockInfoForm = () => {
  const [info, setInfo] = useAtom(currentStockInfoAtom);

  if (info === undefined) {
    return <NoInfo />;
  }

  return (
    <div>
      <div css={rowStyle}>
        <p>이름</p>
        <input
          type="text"
          value={info.name}
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
        />
      </div>
      <div css={rowStyle}>
        <p>현재 가격</p>
        <input
          type="number"
          value={info.currentPrice}
          onChange={(e) =>
            setInfo({ ...info, currentPrice: Number(e.target.value) })
          }
        />
      </div>
      {info.priceConditions.map((condition, i) => {
        return (
          <div>
            <div css={rowStyle}>
              <p>확율</p>
              <input
                type="number"
                value={condition.percentage}
                onChange={(e) => {
                  const newInfo = { ...info };
                  newInfo.priceConditions = [...newInfo.priceConditions];
                  newInfo.priceConditions.splice(i, 1, {
                    ...newInfo.priceConditions[i],
                    percentage: Number(e.target.value),
                  });

                  setInfo(newInfo);
                }}
              />
            </div>
            <div css={rowStyle}>
              <p>목표 가격</p>
              <input
                type="number"
                value={condition.targetPrice}
                onChange={(e) => {
                  const newInfo = { ...info };
                  newInfo.priceConditions = [...newInfo.priceConditions];
                  newInfo.priceConditions.splice(i, 1, {
                    ...newInfo.priceConditions[i],
                    targetPrice: Number(e.target.value),
                  });
                  setInfo(newInfo);
                }}
              />
            </div>
            <button
              onClick={(e) => {
                const newInfo = { ...info };
                newInfo.priceConditions = [...newInfo.priceConditions];
                newInfo.priceConditions.splice(i, 1);
                setInfo(newInfo);
              }}
            >
              -
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          const newInfo = { ...info };
          newInfo.priceConditions = [...newInfo.priceConditions];
          newInfo.priceConditions.push({ targetPrice: 0, percentage: 0 });
          setInfo(newInfo);
        }}
      >
        +
      </button>
    </div>
  );
};

export default StockInfoForm;

const NoInfo = () => {
  return <div> 선택된 종목이 없습니다. </div>;
};
