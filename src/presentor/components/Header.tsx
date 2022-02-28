import styled from '@emotion/styled';
import React from 'react';

const StyledHeader = styled.header`
  color: white;
  padding: 1em;
  background: #4828ff;
`;

interface HeaderProps {
  child?: JSX.Element;
}

const Header = ({ child }: HeaderProps) => {
  return <StyledHeader>{child}</StyledHeader>;
};

export default Header;
