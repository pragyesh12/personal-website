import React from "react";
import styled from "styled-components";
import { colors } from "../../config";

const CustomLink = styled.a`
  font-size: 18px;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  color: ${colors.black};
  margin: 0 2rem;
`;

export default function Link({ children, ...props }) {
  return <CustomLink {...props}>{children}</CustomLink>;
}
