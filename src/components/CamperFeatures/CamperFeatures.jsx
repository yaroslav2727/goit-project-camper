import {
  FeaturesWrapper,
  TagList,
  TagItem,
  SpecificationsTitle,
  Decoration,
  SpecificationsList,
  SpecificationsItem,
  AcIcon,
  AdultIcon,
  AutomaticIcon,
  FuelIcon,
  KitchenIcon,
  BedsIcon,
  CdIcon,
  RadioIcon,
  HobIcon,
} from "./CamperFeatures.module";
import { capitalizeFirstLetter } from "utils/utils";

const CamperFeatures = ({ data }) => {
  const { adults, transmission, details, engine, form, length, width, height, tank, consumption } =
    data;

  return (
    <FeaturesWrapper>
      <TagList>
        <TagItem>
          <AdultIcon />
          <span>{adults} adults</span>
        </TagItem>

        <TagItem>
          <AutomaticIcon />
          {capitalizeFirstLetter(transmission)}
        </TagItem>

        <TagItem>
          <FuelIcon />
          {capitalizeFirstLetter(engine)}
        </TagItem>

        {details.airConditioner > 0 && (
          <TagItem>
            <AcIcon />
            {details.airConditioner && "AC"}
          </TagItem>
        )}

        {details.kitchen > 0 && (
          <TagItem>
            <KitchenIcon />
            {details.kitchen && "Kitchen"}
          </TagItem>
        )}

        {details.beds > 0 && (
          <TagItem>
            <BedsIcon />
            <span>{details.beds === 1 ? `${details.beds} bed` : `${details.beds} beds`}</span>
          </TagItem>
        )}

        {details.CD > 0 && (
          <TagItem>
            <CdIcon />
            {details.CD && "CD"}
          </TagItem>
        )}

        {details.radio > 0 && (
          <TagItem>
            <RadioIcon />
            {details.radio && "Radio"}
          </TagItem>
        )}

        {details.hob > 0 && (
          <TagItem>
            <HobIcon />
            <span>{details.hob === 1 ? `${details.hob} hob` : `${details.beds} hobs`}</span>
          </TagItem>
        )}
      </TagList>
      <div>
        <SpecificationsTitle>Vehicle details</SpecificationsTitle>
        <Decoration />

        <SpecificationsList>
          <SpecificationsItem>
            <span>Form</span>
            <span>{capitalizeFirstLetter(form)}</span>
          </SpecificationsItem>
          <SpecificationsItem>
            <span>Length</span>
            <span>{length}</span>
          </SpecificationsItem>
          <SpecificationsItem>
            <span>Width</span>
            <span>{width}</span>
          </SpecificationsItem>
          <SpecificationsItem>
            <span>Height</span>
            <span>{height}</span>
          </SpecificationsItem>
          <SpecificationsItem>
            <span>Tank</span>
            <span>{tank}</span>
          </SpecificationsItem>
          <SpecificationsItem>
            <span>Consumption</span>
            <span>{consumption}</span>
          </SpecificationsItem>
        </SpecificationsList>
      </div>
    </FeaturesWrapper>
  );
};

export default CamperFeatures;
