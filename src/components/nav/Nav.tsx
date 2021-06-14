import React from 'react';
import styled from 'styled-components';
import OctIcon from '../../assets/icons/octicon';
import { navItems } from '../../helper/constants';

const HeaderNav = () => {
  return (
    <Container>
      <Header>
        <IconContainer>
          <a href="/#">
            <OctIcon />
          </a>
        </IconContainer>
        <NavContainer>
          <InputFieldContainer>
            <div>
              <form action="" className="search-form">
                <label htmlFor="search" className="form-control header-search-wrapper input-sm">
                  <input type="text" className="form-control header-search-input" />
                  <img
                    src="https://github.githubassets.com/images/search-key-slash.svg"
                    alt="slash"
                  />
                </label>
              </form>
            </div>
          </InputFieldContainer>
          <Nav>
            {navItems.map(({ id, value }) =>
              value.toLowerCase() === 'pull' ? (
                <a key={id} href={`#${value}`} className="nav-item">
                  {value}
                  <span className="nav-item-extra">Request</span>s
                </a>
              ) : (
                <a key={id} href={`#${value}`} className="nav-item">
                  {value}
                </a>
              ),
            )}
          </Nav>
        </NavContainer>
      </Header>
    </Container>
  );
};
export default HeaderNav;

const Container = styled.div`
  position: relative;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  color: #cdd9e5;
  padding-right: 16px;
  padding-left: 16px;
  background-color: #2d333b;
  @media (min-width: 768px) {
    padding-right: 24px;
    padding-left: 24px;
    flex-wrap: nowrap;
  }
`;

const IconContainer = styled.div`
  width: 35px;
  height: 35px;
  overflow: hidden;
`;

const NavContainer = styled.div`
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  align-self: stretch;
  order: 2;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    margin-top: 0;
    margin-right: 16px;
    flex-direction: row;
    order: inherit;
  }
`;

const InputFieldContainer = styled.div`
  flex: auto;
  position: relative;
  margin-bottom: 16px;
  margin-right: 0;
  align-self: stretch;
  @media (min-width: 768px) {
    margin-right: 16px;
    max-width: 272px;
    margin-bottom: 0;
    align-self: auto;
  }
  div {
    position: relative;
    .search-form {
      .header-search-wrapper {
        display: flex;
        padding: 0;
        width: 100%;
        max-width: 100%;
        font-size: inherit;
        font-weight: 400;
        color: #cdd9e5;
        background-color: #22272e;
        vertical-align: middle;
        border: 1px solid #22272e;
        box-shadow: none;
        position: relative;
        justify-content: space-between;
        align-items: center;
        .header-search-input {
          display: table-cell;
          width: 100%;
          padding-top: 0;
          padding-bottom: 0;
          font-size: inherit;
          color: inherit;
          background: none;
          border: 0;
          box-shadow: none;
        }
        img {
          margin-right: 8px;
        }
      }
      .input-sm {
        min-height: 28px;
        line-height: 20px;
      }
      .form-control {
        outline: none;
        border-radius: 6px;
        background-position: right 8px center;
        background-repeat: no-repeat;
      }
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  @media (min-width: 768px) {
    align-self: auto;
    flex-direction: row;
  }
  .nav-item {
    font-weight: 600;
    color: #cdd9e5;
    white-space: nowrap;
    border-color: #ffffff26;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-right: 0;
    border-top: 1px solid #444c56;
    @media (min-width: 768px) {
      padding-top: 16px;
      padding-bottom: 16px;
      margin-bottom: -16px;
      margin-top: -16px;
      margin-right: 16px;
      border-top: 0;
    }
    span {
      margin-left: 5px;
      @media (min-width: 768px) {
        display: none;
      }
      @media (min-width: 1012px) {
        display: inline;
      }
    }
  }
`;
