import { css } from "@emotion/react";
import colors from "../../styles/color.style";

const Divider = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 1px;
        background: ${colors.gray[200]};
      `}
    ></div>
  );
};

export default Divider;
