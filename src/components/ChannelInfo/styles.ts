import styled from "styled-components";
import { Tag } from "styled-icons/material";

export const Container = styled.div`
  grid-area: CI;

  display: flex;
  align-items: center;

  padding: 0 17px;

  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
  z-index: 2;
`;
export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;

  margin-left: 16px;

  color: var(--white);
`;

export const HastagIcon = styled(Tag)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
`;
export const Separator = styled.div`
  height: 24px;
  width: 1px;
  margin: 0 12px;
  background: var(--symbol);
  opacity: 0.2;
`;

export const Description = styled.span`
  font-size: 15px;
  color: var(--gray);
`;
