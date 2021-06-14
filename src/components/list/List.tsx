import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useQuery } from 'react-query';
import ListItem from '../listItem';
import StyledButton from '../shared/Button';
import { Icons } from '../../assets/icons';
import Avatar from '../shared/Avatar';
import Badge from '../shared/Badge';
import { RepoType, DevType } from '../../types/List';
import { dropdownItems } from '../../helper/constants';


const renderRepositories = (repos: Array<RepoType>) => {
  return (
    <>
      {repos &&
        repos.map(
          ({
            builtBy,
            description,
            forks,
            language,
            languageColor,
            rank,
            repositoryName,
            since,
            starsSince,
            totalStars,
            url,
            username,
          }) => (
            <ListItem key={rank} display="block" width="">
              <StyledButton
                width="25px"
                height="12px"
                color="#adbac7"
                bordered
                withIcon
                iconName="star"
                text="Star"
              />
              <ListHeader>
                <a href={url || '#/'}>
                  <Icons name="bookmark" />
                  <span>{username} / </span>
                  {repositoryName}
                </a>
              </ListHeader>
              <Paragraph>{description}</Paragraph>
              <StatSection>
                <Badge text={language} color={languageColor} />
                <StyledButton
                  width="25px"
                  height="12px"
                  type="link"
                  withIcon
                  iconName="star"
                  text={totalStars}
                  color="#768390"
                  bordered={false}
                />
                <StyledButton
                  width="25px"
                  height="12px"
                  type="link"
                  withIcon
                  iconName="fork"
                  text={forks}
                  color="#768390"
                  bordered={false}
                />
                <Contributors>
                  Built by
                  {builtBy.map(({ avatar, url, username }) => (
                    <Avatar
                      key={username}
                      src={avatar}
                      alt={username}
                      width="20px"
                      height="20px"
                      url={url}
                    />
                  ))}
                </Contributors>
                <span className="stars-today">
                  <Icons name="star" />
                  {`${starsSince} stars ${since}`}
                </span>
              </StatSection>
            </ListItem>
          ),
        )}
    </>
  );
};

const renderDevelopers = (devs: Array<DevType>) => {
  return (
    <>
      {devs &&
        devs.map(({ avatar, name, popularRepository, rank, url, username }) => (
          <ListItem display="flex" width="95%">
            <SerialNumber href={`https://github.com/trending/developers#pa-${username}`}>
              {rank}
            </SerialNumber>
            <AvatarContainer>
              <Avatar src={avatar} alt="avatar" url={url} width="48px" height="48px" />
            </AvatarContainer>
            <ContentContainer>
              <MainContent>
                <div className="w-50">
                  <ListHeader>
                    <a href={url || '#/'}>{name}</a>
                  </ListHeader>
                  <DevUserName>
                    <a href={url || '#/'}>{username}</a>
                  </DevUserName>
                </div>
                <div className="w-50">
                  <div className="other-content">
                    <DevContent>
                      <div className="content-text-secondary">
                        <Icons name="fire" />
                        POPULAR REPO
                      </div>
                      <ListHeader>
                        <StyledButton
                          type="link"
                          withIcon
                          width="25px"
                          height="12px"
                          iconName="bookmark"
                          text={popularRepository?.repositoryName}
                          bordered={false}
                          color="#539bf5"
                          style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '175px',
                          }}
                          link={popularRepository?.url}
                        />
                      </ListHeader>
                      <div className="description">{popularRepository?.description}</div>
                    </DevContent>
                  </div>
                </div>
              </MainContent>
              <div className="buttons">
                <StyledButton
                  withIcon={false}
                  width="25px"
                  height="12px"
                  text="Follow"
                  bordered
                  color="#adbac7"
                />
              </div>
            </ContentContainer>
          </ListItem>
        ))}
    </>
  );
};

const List = () => {
  const [activeTab, setActiveTab] = useState('repositories');
  const [isRepoSelected, setIsRepoSelected] = useState(true);
  const [isDevSelected, setIsDevSelected] = useState(false);

  const { isLoading, error, data: repos } = useQuery('trendingRepo', () =>
    fetch('https://gh-trending-api.herokuapp.com/repositories').then((res) => res.json()),
  );

  const { isLoading: devLoading, error: devError, data: devs } = useQuery('trendingDev', () =>
    fetch('https://gh-trending-api.herokuapp.com/developers').then((res) => res.json()),
  );

  // Tab handler
  const toggleActiveTab = () => {
    if (activeTab === 'repositories') {
      setActiveTab('developers');
      setIsDevSelected(true);
      setIsRepoSelected(false);
    } else {
      setActiveTab('repositories');
      setIsDevSelected(false);
      setIsRepoSelected(true);
    }
  };

  const renderLists = () => {
    switch (activeTab) {
      case 'repositories':
        return renderRepositories(repos);
      case 'developers':
        return renderDevelopers(devs);

      default:
        return renderRepositories(repos);
    }
  };

  return (
    <Box>
      <BoxHeader>
        <Tab>
          <a href="#/repositories" onClick={toggleActiveTab} aria-current={isRepoSelected}>
            Repositories
          </a>
          <a href="#/developers" onClick={toggleActiveTab} aria-current={isDevSelected}>
            Developers
          </a>
        </Tab>
        <DropdownContainer>
          {activeTab ===  'repositories' ? (
            dropdownItems.map(({ title, dropdownText }) => (
              <DropDown key={title}>
                <DropDownSummary>
                  {title}:<span>{dropdownText}</span>
                </DropDownSummary>
              </DropDown>
            ))
          ) : (
            dropdownItems.slice(1, 3).map(({ title, dropdownText }) => (
              <DropDown key={title}>
                <DropDownSummary>
                  {title}:<span>{dropdownText}</span>
                </DropDownSummary>
              </DropDown>
            ))
          )} 
        </DropdownContainer>
      </BoxHeader>
      <div>{renderLists()}</div>
    </Box>
  );
};
export default List;
const Octicon = css`
  vertical-align: text-bottom;
  color: #768390;
  margin-right: 1px;
  display: inline-block;
  overflow: visible;
  fill: currentColor;
`;
const Box = styled.div`
  background-color: #22272e;
  border: 1px solid #444c56;
  border-radius: 6px;
`;

const BoxHeader = styled.div`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border: 1px solid #444c56;
  background-color: #2d333b;
  padding: 16px;
  margin: -1px -1px 0;
  align-items: center;
  justify-content: space-between;
  display: grid;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const Tab = styled.nav`
  display: block;
  margin-bottom: 0;
  a {
    position: relative;
    float: left;
    padding: 5px 16px;
    font-weight: 500;
    line-height: 20px;
    color: #adbac7;
    border: 1px solid #444c56;
  }
  a[aria-current]:not([aria-current='false']),
  a[aria-current='true'] {
    z-index: 2;
    color: #cdd9e5;
    background-color: #316dca;
    border-color: #4184e4;
  }
  a:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  a:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

const DropdownContainer = styled.div`
  margin-top: 16px;
  margin-left: -8px;
  align-items: center;
  @media (min-width: 544px) {
    display: flex;
  }
  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 0;
    justify-content: flex-end;
  }
`;

const DropDown = styled.div`
  margin-bottom: 16px;
  position: relative;
  @media (min-width: 544px) {
    margin-bottom: 0;
  }
`;

const DropDownSummary = styled.summary`
  padding-left: 15px;
  padding-right: 15px;
  color: #768390;
  list-style: none;
  white-space: nowrap;
  span {
    color: inherit;
    font-weight: 600;
    margin-left: 2px;
    white-space: nowrap;
    &:after {
      display: inline-block;
      width: 0;
      height: 0;
      vertical-align: -2px;
      content: '';
      border: 4px solid transparent;
      border-top-color: currentcolor;
      cursor: pointer;
      margin-left: 1px;
    }
  }
`;

const ListHeader = styled.h1`
  font-size: 18px;
  line-height: 1.25;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 0;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  a {
    text-decoration: none;
    color: #539bf5;
    .octicon {
      ${Octicon}
    }
  }
`;

const DevUserName = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 0;
  a {
    color: #768390;
    text-decoration: none;
    background-color: transparent;
  }
`;

const Paragraph = styled.p`
  padding-right: 24px;
  margin-top: 4px;
  margin-bottom: 4px;
  width: 75%;
  color: #768390;
`;

const StatSection = styled.div`
  font-size: 12px;
  margin-top: 8px;
  color: #768390;
  .stars-today {
    display: inline-block;
    @media (min-width: 544px) {
      float: right;
    }
    .octicon {
      ${Octicon}
    }
  }
`;

const Contributors = styled.span`
  display: inline-block;
  margin-right: 16px;
`;

const SerialNumber = styled.a`
  text-align: center;
  font-size: 12px;
  text-decoration: none;
  width: 16px;
  color: #768390;
`;

const AvatarContainer = styled.div`
  margin-right: 16px;
  margin-left: 16px;
`;

const ContentContainer = styled.div`
  flex: auto;
  width: 80%;
  @media (min-width: 544px) {
    display: flex;
  }
  .buttons {
    display: block;
    @media (min-width: 544px) {
      justify-content: flex-end;
      margin-left: 16px;
      width: 33.33333%;
    }
    @media (max-width: 544px) {
      float: left;
    }
  }
`;

const MainContent = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 544px) {
    width: 66.66667%;
  }
  .w-50 {
    width: 50%;
    .other-content {
      margin-top: 8px;
      margin-bottom: 16px;
      @media (min-width: 768px) {
        margin-top: 0;
        margin-bottom: 0;
      }
    }
  }
`;

const DevContent = styled.article`
  display: block;
  .content-text-secondary {
    .octicon {
      ${Octicon}
      color: rgb(204, 107, 44);
    }
  }
  .description {
    font-size: 12px;
    margin-top: 4px;
    color: #768390;
  }
`;
