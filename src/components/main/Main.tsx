import React from 'react';
import styled from 'styled-components';
import Header from '../header';
import List from '../list/List';
import HeaderNav from '../nav';

const MainComponent = () => {
    return (
        <div>   
            <HeaderNav />
            <div>
                <Main>
                    <Header />
                    <TextSection>
                        <TextContainer>
                            <h1 className="header">Trending</h1>
                            <p className="text-secondary">
                                See what the GitHub community is most excited about today.
                            </p>
                        </TextContainer>
                    </TextSection>
                    <ListSection>
                        <List />
                    </ListSection>
                </Main>
            </div>
        </div>
    )
}
export default MainComponent;

const Main = styled.main`
display: block;
`;

const TextSection = styled.div`
    background-color: #22272e;
    border-bottom: 1px solid #444c56;
`
const TextContainer = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1012px;
    text-align: center;
     @media (min-width: 544px) {
        padding-left: 40px;
        padding-right: 40px;
     }
     @media (min-width: 1012px) {
        padding-left: 16px;
        padding-right: 16px;
     }
     .header {
        margin-top: 0;
        margin-bottom: 0;
        font-weight: 600;
        @media (min-width: 768px) {
            font-size: 32px;
        }
     }
     .text-secondary {
         margin-right: auto;
         margin-left: auto;
         color: #768390;
        @media (min-width: 768px) {
            font-size: 16px;
            width: 50%;
        }
     }
`;

const ListSection = styled.div`
    padding-top: 40px;
    position: relative;
    margin-right: auto;
    margin-left: auto;
    max-width: 1012px;
    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 30px;
    @media (min-width: 544px) {
        padding-left: 40px;
        padding-right: 40px;
    }
    @media (min-width: 1012px) {
        padding-right: 16px;
        padding-left: 16px;
    }
`;