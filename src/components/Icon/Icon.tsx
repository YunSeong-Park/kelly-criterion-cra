import { css } from "@emotion/react";
import { ReactComponent as plus } from "./asset/plus.svg";

const icons = {
  plus: plus,
} as const;

const sizeStyle = {
  large: css`
    width: 40px;
  `,
  medium: css`
    width: 32px;
  `,
  small: css`
    width: 20px;
  `,
};

const colorStyle = (color: string) => css`
  fill: ${color};
`;

interface IconProps {
  icon: keyof typeof icons;
  size?: keyof typeof sizeStyle;
  color?: string;
}

const Icon = ({ icon, size = "medium", color }: IconProps) => {
  const SVGIcon = icons[icon];
  return <SVGIcon css={[sizeStyle[size], color && colorStyle(color)]} />;
};

export default Icon;
