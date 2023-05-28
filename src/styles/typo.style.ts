import { css } from "@emotion/react";
import colors from "./color.style";

const header = {
  large: css`
    font-size: 24px;
    font-weight: 600;
    color: ${colors.gray[900]};
    line-height: 32px;
  `,
  medium: css`
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: ${colors.gray[700]};
  `,
  medium_smibold: css`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: ${colors.gray[700]};
  `,
} as const;

const subText = {
  large: css`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: ${colors.gray[600]};
  `,
  medium: css`
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
    color: ${colors.gray[600]};
  `,
} as const;

const body = {
  medium: css`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.gray[500]};
  `,
  medium_semibold: css`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: ${colors.gray[600]};
  `,
  small: css`
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: ${colors.gray[700]};
  `,
} as const;

const typos = {
  header,
  subText,
  body,
} as const;

export default typos;
