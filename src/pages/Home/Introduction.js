import React from "react";
import styled from "styled-components";
import { H1 } from "../../components";
import { colors } from "../../config";

const ImageContainer = styled.div`
  height: 40rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 8rem;
  background-image: url("https://images.unsplash.com/photo-1601786776487-5530c3a6287a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;
const HeadingContainer = styled.div`
  width: 50%;
`;

export default function Introduction() {
  return (
    <ImageContainer>
      <HeadingContainer>
        <H1 color={colors.white}>
          Hi there 👋 I’m Pragyesh, I’m an React Native App Developer and
          Frontend developer.
        </H1>
      </HeadingContainer>
    </ImageContainer>
  );
}
