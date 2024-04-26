import styled from "styled-components";
import { ReactComponent as Automatic } from "../../svg/automatic.svg";
import { ReactComponent as Tv } from "../../svg/tv.svg";
import { ReactComponent as Kitchen } from "../../svg/kitchen.svg";
import { ReactComponent as Shower } from "../../svg/shower.svg";
import { ReactComponent as Ac } from "../../svg/ac.svg";
import { ReactComponent as Alcove } from "../../svg/camperAlcove.svg";
import { ReactComponent as Van } from "../../svg/camperVan.svg";
import { ReactComponent as Integrated } from "../../svg/camperInteg.svg";

export const AcIcon = Ac;
export const AutomaticIcon = Automatic;
export const KitchenIcon = Kitchen;
export const ShowerIcon = Shower;
export const TvIcon = Tv;
export const AlcoveIcon = Alcove;
export const VanIcon = Van;
export const IntegratedIcon = Integrated;

export const Form = styled.form`
  width: 360px;
`;

export const TextLabel = styled.label`
  display: block;
  margin-bottom: 32px;
`;

export const LabelName = styled.p`
  color: rgba(16, 24, 40, 0.6);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const LabelTextInput = styled.input`
  border-radius: 10px;
  background: var(--color-light);
  padding: 18px;
  display: inline-block;
  width: 324px;
  font-size: 20px;
  border: none;
  outline: none;
`;

export const FilterBlock = styled.div`
  margin-bottom: 32px;
`;

export const FilterTitle = styled.p`
  color: rgba(16, 24, 40, 0.6);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 14px;
`;

export const Fieldset = styled.fieldset`
  border: 0;
  padding: 0;
  margin: 0;
  min-width: 0;
`;

export const NameFilter = styled.legend`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 24px;
`;

export const Decoration = styled.div`
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
  margin-bottom: 24px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 32px;
`;

export const Item = styled.li`
  border-radius: 10px;
  width: 110px;
  height: 95px;
  border: 1px solid transparent;
`;

export const CheckboxLabel = styled.label`
  position: relative;
  display: block;
  cursor: pointer;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;

export const CheckboxSelector = styled.span`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  width: 110px;
  height: 95px;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  border-radius: 10px;
  border: 1px solid ${({ checked }) => (checked ? "var(--color-accent)" : "var(--color-pale)")};
  transition: all 250ms ease-out;

  &:hover {
    background-color: var(--color-light);
  }
`;
