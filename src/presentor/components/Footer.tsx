import styled from '@emotion/styled';
import React from 'react';

const StyledFooter = styled.header`
  color: white;
  padding: 1em;
  background: #29abe2;
`;

interface HeaderProps {
  child?: JSX.Element;
}

const Footer = ({ child }: HeaderProps) => {
  return <StyledFooter>{child}</StyledFooter>;
};

export default Footer;
