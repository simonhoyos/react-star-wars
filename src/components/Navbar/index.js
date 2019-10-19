import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { Heading } from '../Heading';

const StyledNav = styled.nav`
  height: 60px;
  width: 100%;
  padding: 0 15px;
  background: ${props => props.theme.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navbar = () => (
  <StyledNav>
    <Icon />
    <Heading
      as="h1"
      styles="h3"
      color="white"
    >
      Star Wars
    </Heading>
  </StyledNav>
);
