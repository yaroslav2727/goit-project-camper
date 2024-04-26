import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  padding: 16px 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 200px;
  background-color: var(--color-accent);
  transition: background-color 250ms ease-out;

  color: var(--color-light);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.08px;
  border: none;
  outline: none;

  &:hover {
    background-color: var(--color-accent-interact);
  }
`;
