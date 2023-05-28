import { css } from "@emotion/react";
import colors from "../../styles/color.style";
import shadows from "../../styles/shadow.style";
import typos from "../../styles/typo.style";

export const buttonCommonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${typos.body.medium_semibold}

  cursor: pointer;
`;

export const buttonStyle = {
  primary: css`
    background: ${colors.primary[600]};
    border: 1px solid ${colors.primary[600]};
    color: ${colors.white};

    ${shadows.xs.styles}
  `,
  secondary: css`
    background: ${colors.white};
    border: 1px solid ${colors.gray[300]};
    color: ${colors.gray[700]};
    ${shadows.xs.styles};
  `,
  link: css`
    background: transparent;
    border: none;
    color: ${colors.gray[600]};

    :hover {
      background: ${colors.gray[200]};
    }
  `,
};

export const buttonSize = {
  large: css`
    padding: 10px 16px;
    height: 40px;

    box-sizing: border-box;
    border-radius: 8px;
  `,
  small: css`
    height: 24px;
    padding: 2px 4px;

    box-sizing: border-box;
    border-radius: 4px;
  `,
};
