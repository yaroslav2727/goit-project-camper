import styled from "styled-components";
import { ReactComponent as Adult } from "../../svg/adult.svg";
import { ReactComponent as Automatic } from "../../svg/automatic.svg";
import { ReactComponent as Fuel } from "../../svg/fuel.svg";
import { ReactComponent as Kitchen } from "../../svg/kitchen.svg";
import { ReactComponent as Beds } from "../../svg/beds.svg";
import { ReactComponent as Ac } from "../../svg/ac.svg";
import { ReactComponent as Cd } from "../../svg/cd.svg";
import { ReactComponent as Hob } from "../../svg/hob.svg";
import { ReactComponent as Radio } from "../../svg/radio.svg";

export const AcIcon = Ac;
export const AdultIcon = Adult;
export const AutomaticIcon = Automatic;
export const BedsIcon = Beds;
export const FuelIcon = Fuel;
export const KitchenIcon = Kitchen;
export const CdIcon = Cd;
export const HobIcon = Hob;
export const RadioIcon = Radio;

export const FeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TagList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 44px;
`;

export const TagItem = styled.li`
  display: flex;
  gap: 8px;
  padding: 12px 18px;
  align-items: center;
  border-radius: 100px;
  background: var(--color-cloud);
`;

export const SpecificationsTitle = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const Decoration = styled.div`
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
  margin-bottom: 24px;
`;

export const SpecificationsList = styled.ul`
  display: flex;
  gap: 14px;
  flex-direction: column;
`;

export const SpecificationsItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`;
