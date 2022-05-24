import styled, { css } from 'styled-components';
import {
  HiArrowLeft,
  MdOutlineHome,
  MdOutlineNotifications,
  MdSearch,
  MdOutlineMailOutline,
} from '../../styles/icons';

type IconProps = {
  active?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;
  padding: 8px 0 9px 13px;

  border-bottom: 1px solid var(--outline);

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    transition: all 0.2s ease;

    &:hover {
      background-color: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(HiArrowLeft)`
  width: 24px;
  height: 24px;

  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background-color: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }
`;

const iconsCss = css<IconProps>`
  width: 31px;
  height: 31px;

  cursor: pointer;

  fill: var(--gray);

  ${({ active }) =>
    active &&
    css`
      fill: var(--twitter);
    `}

  &:hover {
    fill: var(--twitter);
  }
`;

export const HomeIcon = styled(MdOutlineHome)`
  ${iconsCss};
`;

export const SearchIcon = styled(MdSearch)`
  ${iconsCss};
`;

export const BellIcon = styled(MdOutlineNotifications)`
  ${iconsCss};
`;

export const EmailIcon = styled(MdOutlineMailOutline)`
  ${iconsCss};
`;
