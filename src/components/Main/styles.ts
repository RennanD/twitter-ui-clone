import styled from 'styled-components';

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

export const BackIcon = styled.div``;

export const ProfileInfo = styled.div``;

// export const BottomMenu = styled.div``;

// export const HomeIcon = styled.div``;

// export const SearchIcon = styled.div``;

// export const BellIcon = styled.div``;

// export const EmailIcon = styled.div``;
