import React from "react";
import styled from "styled-components";
import { colors } from "../../config";
import Link from "./link";

const Container = styled.div`
  width: 100%;
  height: 8rem;
  background-color: ${colors.tertiary};
  padding: 0 8rem;
  display: flex;
  align-items: center;
  background-color: ${colors.primary};
`;

const LinkContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

function Header() {
  return (
    <Container>
      <h1>pragyesh singh</h1>

      <LinkContainer>
        <Link href='#'>About</Link>
        <Link href='#'>Projects</Link>
        <Link href='#'>Social</Link>
        <Link href='#'>Contacts</Link>
        <Link href='#'>Photos</Link>
        <Link href='#'>Education</Link>
      </LinkContainer>
    </Container>
  );
}

export default Header;
