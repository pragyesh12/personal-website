import styled from "styled-components";
import { colors } from "../../config";

export const H1 = styled.h1`
  font-size: 3.6rem;
  color: ${(props) => props.color || colors.black};
  font-weight: 700;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export const H2 = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.color || colors.black};
  font-weight: 700;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export const SemiBoldText = styled.p`
  font-size: 1.6rem;
  color: ${(props) => props.color || colors.black};
  font-weight: 500;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export const BodyMedium = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.color || colors.black};
  font-weight: 500;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export const BodyRegular = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.color || colors.black};
  font-weight: 400;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;
