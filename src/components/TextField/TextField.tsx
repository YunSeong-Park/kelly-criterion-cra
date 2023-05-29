import { css } from "@emotion/react";
import colors from "../../styles/color.style";
import shadows from "../../styles/shadow.style";
import { ChangeEventHandler } from "react";

type TextFieldProps<T extends string | number> = {
  value: T;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  endAornment?: React.ReactNode;
  type: T extends number ? "number" : "text" | undefined;
  isFullWidth?: boolean;
  width?: string;
};

const rootStyle = css`
  display: inline-flex;
  align-items: center;

  border: 1px solid ${colors.gray[300]};
  padding: 10px 14px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  color: ${colors.gray[500]};

  box-sizing: border-box;
  ${shadows.xs.styles};
  > input {
    border: none;
    outline: none;
    flex: 1 1 100%;
    font-weight: 400;
    font-size: 14px;
    color: ${colors.gray[500]};
  }
`;
const textRightStyle = css`
  text-align: right;
`;

const TextField = <T extends string | number>({
  value,
  onChange,
  endAornment,
  type = "text",
  isFullWidth = false,
  width,
}: TextFieldProps<T>) => {
  return (
    <div
      css={[
        rootStyle,
        isFullWidth &&
          css`
            width: 100%;
          `,
        width &&
          css`
            width: ${width};
          `,
      ]}
    >
      <input
        css={endAornment && textRightStyle}
        type={type}
        value={value}
        onChange={onChange}
      />
      {endAornment}
    </div>
  );
};

export default TextField;
