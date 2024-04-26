import styled from "styled-components";
import { ReactComponent as Heart } from "../../svg/heart.svg";
import { ReactComponent as Ac } from "../../svg/ac.svg";
import { ReactComponent as Adult } from "../../svg/adult.svg";
import { ReactComponent as Automatic } from "../../svg/automatic.svg";
import { ReactComponent as Beds } from "../../svg/beds.svg";
import { ReactComponent as Fuel } from "../../svg/fuel.svg";
import { ReactComponent as Kitchen } from "../../svg/kitchen.svg";
import { ReactComponent as Map } from "../../svg/map.svg";
import { ReactComponent as Star } from "../../svg/star.svg";

export const AcIcon = Ac;
export const AdultIcon = Adult;
export const AutomaticIcon = Automatic;
export const BedsIcon = Beds;
export const FuelIcon = Fuel;
export const KitchenIcon = Kitchen;
export const MapIcon = Map;
export const StarIcon = Star;

export const ListItem = styled.li`
  display: flex;
  gap: 24px;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid var(--color-pale);
`;

export const MainImage = styled.img`
  border-radius: 10px;
  object-fit: cover;
  height: 310px;
  width: 290px;
`;

export const TitleLine = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 8px;
`;

export const PriceBlock = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const HeartButton = styled.button`
  background: none;
  border: none;
`;

export const HeartIcon = styled(Heart)`
  fill: ${({ $favorited }) => ($favorited ? "var(--color-accent)" : "transparent")};
  stroke: ${({ $favorited }) => ($favorited ? "transparent" : "var(--color-primary)")};
`;

export const SubtitleLine = styled.div`
  display: flex;
  margin-bottom: 24px;
  gap: 18px;
  align-items: center;
`;

export const Rating = styled.span`
  line-height: 24px;
  text-decoration: underline;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Location = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Description = styled.div`
  margin-bottom: 24px;
  line-height: 24px;
  color: var(--color-secondary);
`;

export const TagList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 24px;
`;

export const TagItem = styled.li`
  display: flex;
  gap: 8px;
  padding: 12px 18px;
  align-items: center;
  border-radius: 100px;
  background-color: var(--color-cloud);
`;

export const ShowMoreButton = styled.button`
  display: inline-flex;
  padding: 16px 40px;
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
  &:hover,
  &:focus {
    background-color: var(--color-accent-interact);
  }
`;
