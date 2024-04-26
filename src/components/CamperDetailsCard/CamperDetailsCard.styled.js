import styled from "styled-components";
import { ReactComponent as Close } from "../../svg/close.svg";
import { ReactComponent as Star } from "../../svg/star.svg";
import { ReactComponent as Map } from "../../svg/map.svg";

export const CloseIcon = Close;
export const StarIcon = Star;
export const MapIcon = Map;

export const TitleLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 10px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const SubtitleLine = styled.div`
  display: flex;
  margin-bottom: 16px;
  gap: 16px;
  align-items: center;
`;

export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
`;

export const Location = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  line-height: 24px;
`;

export const PriceLine = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 24px;
`;

export const Gallery = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const Image = styled.img`
  width: 290px;
  height: 310px;
  border-radius: 10px;
  object-fit: cover;
`;

export const Description = styled.p`
  color: var(--color-secondary);
  line-height: 24px;
  margin-bottom: 44px;
`;

export const TabSelection = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
`;

export const Tab = styled.li`
  padding-bottom: 24px;
  border-bottom: ${({ selected }) => {
    return selected ? "5px solid var(--color-accent)" : "none";
  }};
`;

export const TabButton = styled.button`
  background: none;
  border: none;
  color: var(--color-primary);
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  transition: color 250ms ease-out;

  &:hover {
    color: var(--color-accent-interact);
  }
`;

export const Decoration = styled.div`
  border-bottom: 1px solid var(--color-pale);
  margin-bottom: 44px;
`;

export const DetailsBlock = styled.div`
  display: flex;
  gap: 24px;
`;
