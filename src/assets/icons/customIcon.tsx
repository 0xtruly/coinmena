import React, {FC} from 'react';
import { Icon } from '../../types/Icon';
import {
    BookmarkIcon,
    FireIcon,
    ForkIcon,
    OctIcon,
    StarIcon,
    ArrowUpIcon,
    ArrowDownIcon
} from '../icons';

const Icons: FC<Icon> = ({name}) => {
    switch (name) {
        case 'bookmark':
            return <BookmarkIcon />;
        case 'fire':
            return <FireIcon />;
        case 'fork':
            return <ForkIcon />;
        case 'oct':
            return <OctIcon />;
        case 'star':
            return <StarIcon />;
        case 'arrowUp':
            return <ArrowUpIcon />;
        case 'arrowDown':
            return <ArrowDownIcon />;
    
        default:
            return <BookmarkIcon />;
    }
}
export default Icons;