import React, { FC } from 'react';
import styled from 'styled-components';
import { ListType } from '../../types/List';

const ListItem: FC<ListType> = ({ children, display, width }) => {
  return (
    <Container display={display} width={width}>
      {children}
    </Container>
  );
};
export default ListItem;

const Container = styled.article<{ display: string; width: string }>`
  display: ${(props) => props.display};
  padding: 16px;
  margin-top: -1px;
  list-style-type: none;
  border-top: 1px solid #373e47;
  width: ${(props) => props.width};
  &:first-of-type {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-top-color: transparent;
  }
`;
