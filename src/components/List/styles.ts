import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--secondary);
  border-radius: 14px;
`;

export const Item = styled.div`
  padding: 10px 16px;

  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    /* opacity: 0.8; */
    background-color: var(--twitter-dark-hover);

    > button {
      opacity: 0.8;
    }
  }

  &:first-child {
    padding-top: 13px;
  }

  &:last-child {
    padding-bottom: 17px;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 19px;
`;
