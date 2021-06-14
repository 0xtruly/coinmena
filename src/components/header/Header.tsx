import React from 'react';
import styled from 'styled-components';
import { headerNavItems } from '../../helper/constants';

const Header = () => {
  return (
    <>
      <StickyNav>
        <NavContainer>
          <Nav>
            {headerNavItems.map(({ id, value }) => (
              <a href={`#${value}`} key={id}>
                {value}
              </a>
            ))}
          </Nav>
        </NavContainer>
      </StickyNav>
    </>
  );
};
export default Header;

const StickyNav = styled.div`
  position: sticky;
  top: 0;
  z-index: 21;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  background-color: #22272e;
`;

const NavContainer = styled.nav`
  margin-right: auto;
  margin-left: auto;
  max-width: 1012px;
  @media (min-width: 544px) {
    padding-right: 40px;
    padding-left: 40px;
  }
  @media (min-width: 1012px) {
    padding-right: 16px;
    padding-left: 16px;
  }
`;

const Nav = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    text-align: left;
    justify-content: center;
  }
  a {
    text-decoration: none;
    font-size: 14px;
    flex-basis: 100%;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 8px;
    cursor: pointer;
    border: 0;
    border-bottom-color: transparent;
    color: #768390;
    border-bottom: 2px solid transparent;
    transition: border-bottom-color 0.4s;
    @media (min-width: 768px) {
      flex-basis: auto;
      font-size: 14px;
      padding-top: 16px;
      padding-bottom: 16px;
      margin-right: 24px;
      margin-top: 0;
    }
  }
`;
