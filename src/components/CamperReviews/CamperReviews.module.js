import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const ProfilePic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--color-cloud);
`;

export const FirstLetter = styled.p`
  color: var(--color-accent);
  font-size: 24px;
  font-weight: 600;
`;

export const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

export const ReviewBody = styled.p`
  color: var(--color-secondary);
  line-height: 24px;
`;
