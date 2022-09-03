import { darken, lighten } from "polished";
import styled, { css } from "styled-components";

type ButtonProps = {
  color?: "primary" | "secondary" | "success" | "danger" | "default";
};

const getColor = (color: string) => {
  // if (color && ['primary', 'succcess', 'danger'].includes(color)) {
  //   return 'white';
  // }

  // return 'black';

  switch (color) {
    case "primary":
    case "success":
    case "danger":
    case "default":
      return "white";
    default:
      return "black";
  }
};

const getBackgroundColor = (color: string) => {
  const colors: { [key: string]: string } = {
    primary: "#f06449",
    secondary: "#ede6e3",
    success: "green",
    danger: "#ff4000",
    default: "#1a1a1a",
  };

  return colors[color];
};

const Button = styled.button<ButtonProps>`
  all: unset;
  height: 40px;
  padding: 5px 10px;
  transition: background 0.6s ease-in;
  width: fit-content;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;

  ${({ color = "default" }) => {
    return css`
      color: ${getColor(color)};
      background-color: ${getBackgroundColor(color)};

      &:hover {
        background-color: ${darken(0.1, getBackgroundColor(color))};
      }
    `;
  }}
`;

export default Button;
