import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 14px;

  > span {
    color: var(--gray);
  }

  > strong {
    margin-bottom: 10px;
  }
`;
