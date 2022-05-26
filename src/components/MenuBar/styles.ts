import styled, { css } from 'styled-components';

import {
  MdOutlineHome,
  MdOutlineNotifications,
  MdOutlineMailOutline,
  MdPerson,
  MdOutlineFavoriteBorder,
  MdOutlineExitToApp,
} from '../../styles/icons';
import { Button } from '../Button';
import { RocketseatIcon } from '../RocketseatIcon';

type MenuButtonProps = {
  selected?: boolean;
};

export const Container = styled.div`
  display: none;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;

    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;

    overflow-y: scroll;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(RocketseatIcon)`
  width: 41px;
  height: 41px;

  > path {
    fill: var(--twitter);
  }

  margin-bottom: 20px;
`;

export const MenuButton = styled.button<MenuButtonProps>`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  padding: 8.25px 0;
  outline: 0;

  cursor: pointer;
  border-radius: 25px;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--twitter-dark-hover);
  }

  ${({ selected }) =>
    selected &&
    css`
      > span,
      svg {
        color: var(--twitter);
        fill: var(--twitter);
      }

      span {
        font-weight: bold;
      }
    `}

  & + button {
    margin-top: 16.5px;
  }

  @media (min-width: 1280px) {
    margin-right: 40px;
    > span {
      display: inline;
      margin-left: 19px;
      font-size: 19px;
    }

    padding-right: 15px;
    padding-left: 15px;
  }
`;

export const TweetButton = styled(Button)`
  margin-top: 33px;
  width: 40px;
  height: 40px;
  > span {
    display: none;
  }
  @media (min-width: 1280px) {
    width: 100%;
    height: unset;
    margin-right: 40px;
    > span {
      display: inline;
    }
  }
`;

const iconsCss = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;

  color: var(-white);
`;

export const HomeIcon = styled(MdOutlineHome)`
  ${iconsCss};
`;

export const BellIcon = styled(MdOutlineNotifications)`
  ${iconsCss};
`;

export const MailIcon = styled(MdOutlineMailOutline)`
  ${iconsCss};
`;

export const FavoriteIcon = styled(MdOutlineFavoriteBorder)`
  ${iconsCss};
`;

export const ProfileIcon = styled(MdPerson)`
  ${iconsCss};
`;

export const BottomSide = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding: 8.25px 15px;

  transition: all 0.2s ease;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    background-color: var(--twitter-dark-hover);
  }
`;

export const Avatar = styled.div`
  height: 39px;
  width: 39px;

  flex-shrink: 0;

  border-radius: 50%;

  background-color: var(--gray);
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px;

    > span {
      color: var(--gray);
    }
  }
`;

export const ExitButton = styled(MdOutlineExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    height: 25px;
    width: 25px;

    color: var(--white);
    margin-left: 30px;
  }
`;
