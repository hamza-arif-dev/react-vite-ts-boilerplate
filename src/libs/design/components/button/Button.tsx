import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { children, ...restProps } = props;
  return <button {...restProps}>{children}</button>;
};
