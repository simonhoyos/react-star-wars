import React from 'react';
import styled, { css } from 'styled-components';

const StyledHeading1 = css`
  font-size: 80px;
`;

const StyledHeading2 = css`
  font-size: 60px;
`;

const StyledHeading3 = css`
  font-size: 30px;
`;

const StyledHeading4 = css`
  font-size: 24px;
`;

const StyledHeading = styled.div`
  ${props => props.styles === 'h1' && StyledHeading1}
  ${props => props.styles === 'h2' && StyledHeading2}
  ${props => props.styles === 'h3' && StyledHeading3}
  ${props => props.styles === 'h4' && StyledHeading4}

  color: ${props => props.theme[props.color]};
  font-weight: ${props => props.theme.bold};
`;


export const Heading = ({
  as,
  children,
  styles,
  color
}) => (
  <StyledHeading
    as={as}
    styles={styles}
    color={color}
  >
    {children}
  </StyledHeading>
);
