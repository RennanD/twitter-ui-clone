import styled from 'styled-components';

export const Container = styled.div`
  flex: flex;
  flex-direction: column;

  padding-bottom: min(56px, max(12vw, 12px));
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;

  text-align: center;

  font-weight: bold;
  font-size: 15px;
  outline: 0;
  cursor: pointer;

  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);

  transition: all 0.2s ease;

  &:hover {
    background-color: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;
