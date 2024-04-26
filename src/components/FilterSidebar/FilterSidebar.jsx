import { useState } from "react";
import toast from "react-hot-toast";
import Button from "components/Button/Button";

import {
  LabelName,
  Form,
  TextLabel,
  LabelTextInput,
  FilterTitle,
  Fieldset,
  Decoration,
  NameFilter,
  List,
  Item,
  FilterBlock,
  CheckboxLabel,
  CheckboxInput,
  CheckboxSelector,
  AutomaticIcon,
  TvIcon,
  KitchenIcon,
  ShowerIcon,
  AcIcon,
  AlcoveIcon,
  VanIcon,
  IntegratedIcon,
} from "./FilterSidebar.module";

const FilterSidebar = () => {
  const [checkboxField, setCheckboxField] = useState({
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    shower: false,
  });

  const [radioField, setRadioField] = useState({
    van: false,
    integrated: false,
    alcove: false,
  });

  const handleCheckboxInput = e => {
    const { name, checked } = e.target;
    setCheckboxField({ ...checkboxField, [name]: checked });
  };

  const handlePseudoradioInput = e => {
    const { name, checked } = e.target;
    setRadioField({ van: false, integrated: false, alcove: false, [name]: checked });
  };

  const handleSubmit = e => {
    e.preventDefault();
    toast.error("Filtering functionality is WIP");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextLabel>
        <LabelName>Location</LabelName>
        <LabelTextInput type="text" name="location" placeholder="City" />
      </TextLabel>

      <FilterBlock>
        <FilterTitle>Filters</FilterTitle>
        <Fieldset>
          <NameFilter>Vehicle equipment</NameFilter>
          <Decoration />

          <List>
            <Item>
              <CheckboxLabel>
                <CheckboxInput
                  type="checkbox"
                  name="ac"
                  checked={checkboxField.ac}
                  onChange={handleCheckboxInput}
                />
                <CheckboxSelector checked={checkboxField.ac}>
                  <AcIcon style={{ width: "32", height: "32" }} />
                  AC
                </CheckboxSelector>
              </CheckboxLabel>
            </Item>

            <Item>
              <CheckboxLabel>
                <CheckboxInput
                  type="checkbox"
                  name="automatic"
                  checked={checkboxField.automatic}
                  onChange={handleCheckboxInput}
                />
                <CheckboxSelector checked={checkboxField.automatic}>
                  <AutomaticIcon style={{ width: "32", height: "32" }} />
                  Automatic
                </CheckboxSelector>
              </CheckboxLabel>
            </Item>

            <Item>
              <CheckboxLabel>
                <CheckboxInput
                  type="checkbox"
                  name="kitchen"
                  checked={checkboxField.kitchen}
                  onChange={handleCheckboxInput}
                />
                <CheckboxSelector checked={checkboxField.kitchen}>
                  <KitchenIcon style={{ width: "32", height: "32" }} />
                  Kitchen
                </CheckboxSelector>
              </CheckboxLabel>
            </Item>

            <Item>
              <CheckboxLabel>
                <CheckboxInput
                  type="checkbox"
                  name="tv"
                  checked={checkboxField.tv}
                  onChange={handleCheckboxInput}
                />
                <CheckboxSelector checked={checkboxField.tv}>
                  <TvIcon style={{ width: "32", height: "32" }} />
                  TV
                </CheckboxSelector>
              </CheckboxLabel>
            </Item>

            <Item>
              <CheckboxLabel>
                <CheckboxInput
                  type="checkbox"
                  name="shower"
                  checked={checkboxField.shower}
                  onChange={handleCheckboxInput}
                />
                <CheckboxSelector checked={checkboxField.shower}>
                  <ShowerIcon style={{ width: "32", height: "32" }} />
                  Shower/WC
                </CheckboxSelector>
              </CheckboxLabel>
            </Item>
          </List>
        </Fieldset>

        <Fieldset>
          <NameFilter>Vehicle type</NameFilter>
          <Decoration />

          <List>
            <Item>
              <CheckboxLabel>
                <CheckboxInput
                  type="checkbox"
                  name="van"
                  checked={radioField.van}
                  onChange={handlePseudoradioInput}
                />
                <CheckboxSelector checked={radioField.van}>
                  <VanIcon style={{ width: "40px", height: "28px" }} />
                  Van
                </CheckboxSelector>
              </CheckboxLabel>
            </Item>

            <Item>
              <CheckboxLabel>
                <CheckboxInput
                  type="checkbox"
                  name="integrated"
                  checked={radioField.integrated}
                  onChange={handlePseudoradioInput}
                />
                <CheckboxSelector checked={radioField.integrated}>
                  <IntegratedIcon style={{ width: "40px", height: "28px" }} />
                  Fully Integrated
                </CheckboxSelector>
              </CheckboxLabel>
            </Item>

            <Item>
              <CheckboxLabel>
                <CheckboxInput
                  type="checkbox"
                  name="alcove"
                  checked={radioField.alcove}
                  onChange={handlePseudoradioInput}
                />
                <CheckboxSelector checked={radioField.alcove}>
                  <AlcoveIcon style={{ width: "40px", height: "28px" }} />
                  Alcove
                </CheckboxSelector>
              </CheckboxLabel>
            </Item>
          </List>
        </Fieldset>
      </FilterBlock>

      <Button type="submit">Search</Button>
    </Form>
  );
};

export default FilterSidebar;
