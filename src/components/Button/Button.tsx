import { css } from "@emotion/react";
import { buttonCommonStyle, buttonSize, buttonStyle } from "./button.style";

interface ButtonProps {
  children: React.ReactNode;
  size: "small" | "large";
  type: "primary" | "secondary" | "link";
}

const Button = ({ children, size, type }: ButtonProps) => {
  return (
    <button css={[buttonCommonStyle, buttonSize[size], buttonStyle[type]]}>
      {children}
    </button>
  );
};

export default Button;
