import styled, { css } from 'styled-components';

type ButtonProps = {
  outline?: boolean;
};

export const Button = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--twitter);

  color: var(--white);

  border-radius: 25px;
  padding: 16px;
  font-size: 15px;
  font-weight: bold;

  cursor: pointer;
  outline: 0;

  &:hover {
    background-color: var(--twitter-light-hover);
  }

  ${({ outline }) =>
    outline &&
    css`
      border: 1px solid var(--twitter);
      color: var(--twitter);
      background-color: transparent;

      &:hover {
        background-color: var(--twitter-dark-hover);
      }
    `};
`;
