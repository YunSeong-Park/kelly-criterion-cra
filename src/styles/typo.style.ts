import { css } from "@emotion/react";
import colors from "./color.style";

const commonStyle = css`
  padding: 0px;
  margin: 0px;
`;

const header = {
  large: css`
    ${commonStyle.styles}
    font-size: 24px;
    font-weight: 600;
    color: ${colors.gray[900]};
    line-height: 32px;
  `,
  medium: css`
    ${commonStyle.styles}
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: ${colors.gray[700]};
  `,
  medium_smibold: css`
    ${commonStyle.styles}
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: ${colors.gray[700]};
  `,
} as const;

const subText = {
  large: css`
    ${commonStyle.styles}
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: ${colors.gray[600]};
  `,
  medium: css`
    ${commonStyle.styles}
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
    color: ${colors.gray[600]};
  `,
} as const;

const body = {
  medium: css`
    ${commonStyle.styles}
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.gray[500]};
  `,
  medium_semibold: css`
    ${commonStyle.styles}
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: ${colors.gray[600]};
  `,
  small: css`
    ${commonStyle.styles}
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
