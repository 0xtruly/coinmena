import React, {FC} from 'react';
import styled from 'styled-components';
import { AvatarType } from '../../types/Avatar';

const Avatar: FC<AvatarType> = ({src, alt, width, height, url}) => {
    return (
        <Container width={width} height={height} href={url || '#/'} >
            <img src={src} alt={alt} />
        </Container>
    )
};
export default Avatar;

const Container = styled.a<{width: string, height: string}>`
    width: ${(props) => props.width || '30px'};
    height: ${(props) => props.height || '30px'};
    overflow: hidden;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    margin: 0 2px;
    img {
        width: ${(props) => props.width || '30px'};
        height: ${(props) => props.height || '30px'};
        object-fit: contain;
    }
`;
