import React, { FC } from 'react';
import styled from 'styled-components';
import { Icons } from '../../assets/icons';
import { ButtonType } from '../../types/Button';

const StyledButton: FC<ButtonType> = ({
  color,
  width,
  height,
  bordered,
  iconName,
  withIcon,
  text,
  onClick,
  type,
  style,
  link,
}) => {
  return type === 'link' ? (
    withIcon ? (
      <Link width={width} height={height} color={color} onClick={onClick} style={style} href={link}>
        <Icons name={iconName} />
        {text}
      </Link>
    ) : (
      <Link width={width} height={height} color={color} onClick={onClick} style={style}>
        <span className="text">{text}</span>
      </Link>
    )
  ) : withIcon ? (
    <ButtonContainer>
      <Button
        width={width}
        height={height}
        color={color}
        bordered={bordered}
        onClick={onClick}
        style={style}
      >
        <Icons name={iconName} />
        <span className="icon-text">{text}</span>
      </Button>
    </ButtonContainer>
  ) : (
    <ButtonContainer>
      <Button
        width={width}
        height={height}
        color={color}
        bordered={bordered}
        onClick={onClick}
        style={style}
      >
        <span className="text">{text}</span>
      </Button>
    </ButtonContainer>
  );
};
export default StyledButton;

const Link = styled.a<{ color: string; width: string; height: string }>`
  text-decoration: none;
  display: inline-block;
  color: ${(props) => props.color || '#768390'};
  margin-right: 16px;
  .octicon {
    vertical-align: text-bottom;
    display: inline-block;
    overflow: visible;
    fill: currentColor;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  float: right;
`;
const Button = styled.button<{ color: string; width: string; height: string; bordered: boolean }>`
  border-radius: ${(props) => (props.bordered ? '5px' : 0)};
  color: ${(props) => props.color || 'white'};
  position: relative;
  display: inline-block;
  font-weight: 500;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid;
  border-radius: 6px;
  appearance: none;
  padding: 3px 12px;
  font-size: 12px;
  line-height: 20px;
  padding: 5px 16px;
  overflow: visible;
  background-color: #373e47;
  border-color: #444c56;
  .icon-text {
    display: none;
    @media (min-width: 768px) {
      display: inline;
    }
  }
  .octicon {
    vertical-align: text-top;
    color: #768390;
    margin-right: 0;
    display: inline-block;
    overflow: visible;
    fill: currentColor;
    @media (min-width: 768px) {
      margin-right: 4px;
    }
  }
`;
