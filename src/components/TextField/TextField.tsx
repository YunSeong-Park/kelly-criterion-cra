import { css } from "@emotion/react";
import colors from "../../styles/color.style";
import shadows from "../../styles/shadow.style";

interface TextFieldProps {
  value: string;
  onChange: (value: string) => void;
  endAornment?: React.ReactNode;
}
const rootStyle = css`
  display: inline-flex;
  align-items: center;

  border: 1px solid ${colors.gray[300]};
  padding: 10px 14px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  color: ${colors.gray[500]};
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

const TextField = ({ value, onChange, endAornment }: TextFieldProps) => {
  return (
    <div css={rootStyle}>
      <input
        css={endAornment && textRightStyle}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {endAornment}
    </div>
  );
};

export default TextField;
