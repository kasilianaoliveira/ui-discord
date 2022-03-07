import styled from "styled-components";
import { Props } from ".";

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  height: 48px;
  width: 48px;
  border-radius: 50%;

  margin-bottom: 8px;

  background-color: ${(props) =>
    props.isHome ? "var(--rocketseat)" : "var(--primary)"};

  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    width: 9px;
    height: 9px;

    position: absolute;
    left: -15px;
    top: calc(50% - 4.5px);
    background-color: var(--white);

    border-radius: 50%;
  }

  &::after {
    position: absolute;
    background-color: var(--notification);

    width: auto;
    height: 16px;

    padding: 0 4px;

    bottom: -4px;
    right: -4px;

    border: 4px solid var(--quaternary);
    border-radius: 12px;

    text-align: center;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    content: "${(props) => props.mentions && props.mentions}";
    display: ${(props) => !props.mentions && "none"};
  }

  transition: border-radius 0.2s, background-color 0.2s;
  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${(props) =>
      props.isHome ? "var(--rocketseat)" : "black"};
  }
`;
