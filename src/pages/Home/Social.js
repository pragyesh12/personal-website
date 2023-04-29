import React from "react";
import styled from "styled-components";
import { BodyMedium, BodyRegular, Card, H1, H2 } from "../../components";

const SocialContainer = styled.div`
  margin: 0 8rem;
  padding: 3rem 0 0 0;
`;

const SocialCardContainer = styled.div`
  margin: 2rem 0 0 0;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export default function Social() {
  return (
    <SocialContainer>
      <H1>Social</H1>

      <SocialCardContainer>
        <Card>
          <Flex>
            <H2>Project Name</H2>
            <BodyMedium padding='0 1rem'>( 5 jun 22 to 7 july 22)</BodyMedium>
          </Flex>

          <BodyRegular padding='2rem 0'>
            First true generator on the Internet. It uses a dictionary of over
            200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem
          </BodyRegular>

          <BodyRegular>
            https://www.w3schools.com/cssref/css3_pr_background.php
          </BodyRegular>
        </Card>
      </SocialCardContainer>
    </SocialContainer>
  );
}
