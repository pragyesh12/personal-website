import React from "react";
import styled from "styled-components";
import { colors } from "../../config";

const CardContainer = styled.div`
  border: 5px solid ${colors.tint};
  padding: 2.4rem;
  flex: ${(props) => props.flex};
  background-color: ${colors.primary};
  cursor: pointer;

  transition: transform 0.2s ease-out;
  &:hover {
    transform: scale(1.1, 1.2);
  }
`;

function Card({ children, flex }) {
  return <CardContainer flex={flex}>{children}</CardContainer>;
}

export default Card;
