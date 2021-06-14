import React, {FC} from 'react';
import styled from 'styled-components';
import { BadgeType } from '../../types/Badge';

const Badge: FC<BadgeType> = ({text, color}) => {
    return (
        <Container color={color}>
            {text ? (
                <>
                    <span className="badge m-right"></span>
                    <span className="badge-text">{text}</span>
                </>
            ) : (
                <>
                    <span className="badge"></span>
                </>
            )}
        </Container>
    )
}
export default Badge;

const Container = styled.span<{color: string}>`
    display: inline-block;
    margin-right: 16px;
    margin-left: 0;
    .badge {
        background-color: ${(props) => props.color};
        padding: 0 7px;
        border-radius: 50%;
    }
    .m-right {
        margin-right: 5px;
    }
`;