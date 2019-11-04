import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  height: 50px;
  font-size: 2rem;
  grid-area: h;
  grid-template-columns: 1fr;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #26a1f7;
`;

const Header = (): JSX.Element => {
  return (
    <HeaderStyle>
      <span>Test app</span>
    </HeaderStyle>
  );
};

export default Header;
