import { useAtomValue } from "jotai";
import { maxPercentageAtom, yieldAtom } from "../../atoms/kelly-condition";

const Notify = () => {
  const maxpercentage = useAtomValue(maxPercentageAtom);
  const plus = useAtomValue(yieldAtom);

  return (
    <div>
      <p>적정 비중: {maxpercentage}%</p>

      <p>기대 수익율: {plus?.toFixed(3)}%</p>
    </div>
  );
};

export default Notify;
