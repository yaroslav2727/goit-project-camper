import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 24px;
  border-radius: 10px;
  border: 1px solid var(--color-pale);
  width: 440px;
`;

export const BookingHeader = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BookingTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const BookingSubtitle = styled.p`
  color: var(--color-secondary);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
`;

export const BookingInput = styled.input`
  padding: 18px;
  border-radius: 10px;
  background-color: var(--color-light);
  color: var(--color-secondary);
  border: 1px solid transparent;
  outline: none;
  font-size: 16px;
  line-height: 20px;
  width: 400px;
  font-family: inherit;

  &:focus {
    border: 1px solid var(--color-secondary);
  }
`;

export const BookingComment = styled.textarea`
  padding: 18px;
  border-radius: 10px;
  background-color: var(--color-light);
  color: var(--color-secondary);
  border: 1px solid transparent;
  outline: none;
  font-size: 16px;
  line-height: 20px;
  width: 400px;
  font-family: inherit;
  resize: none;

  &:focus {
    border: 1px solid var(--color-secondary);
  }

  &::-webkit-scrollbar {
    width: 4px;
    display: flex;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-pale);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-accent);
  }
`;
