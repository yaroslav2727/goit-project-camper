import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 64px;
  padding: 48px 0;
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoadMoreButton = styled.button`
  display: inline-flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  transition: border-color 250ms ease-out;
  border-radius: 200px;
  border: 1px solid var(--color-pale);

  color: var(--color-primary);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.08px;
  outline: none;

  &:hover {
    border-color: var(--color-accent);
  }
`;
