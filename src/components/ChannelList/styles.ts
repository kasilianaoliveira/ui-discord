import styled from "styled-components";
import { ExpandMore } from "styled-icons/material";

export const Container = styled.div`
  grid-area: CL;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 11px 0 16px;
  background-color: var(--secondary);
`;
export const Title = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: var(--white);
  text-transform: uppercase;
`;
export const ExpandIcon = styled(ExpandMore)`
  width: 28px;
  height: 28px;

  color: var(--white);
  cursor: pointer;
`;
