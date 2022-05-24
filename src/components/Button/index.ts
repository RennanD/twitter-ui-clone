import styled, { css } from 'styled-components';

type ButtonProps = {
  outline?: boolean;
};

export const Button = styled.div<ButtonProps>`
  background-color: var(--twitter);

  color: var(--white);

  border-radius: 25px;
  padding: 16px;
  font-size: 15px;
  font-weight: bold;

  cursor: pointer;
  outline: 0;

  &:hover {
    background-color: var(--twitter-light);
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
