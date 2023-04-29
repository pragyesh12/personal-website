import React from "react";
import styled from "styled-components";
import { BodyMedium, BodyRegular, Card, H1, H2 } from "../../components";

const ProjectContainer = styled.div`
  margin: 0 8rem;
  padding: 3rem 0 0 0;
`;

const ProjectCardContainer = styled.div`
  margin: 2rem 0 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 4rem;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export default function Project() {
  return (
    <ProjectContainer>
      <H1>Projects</H1>

      <ProjectCardContainer>
        {[1, 2, 3, 4].map((c, k) => (
          <Card flex={0.45}>
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
        ))}
      </ProjectCardContainer>
    </ProjectContainer>
  );
}
