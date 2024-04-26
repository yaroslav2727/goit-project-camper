import { useState } from "react";
import CamperFeatures from "components/CamperFeatures/CamperFeatures";
import CamperReviews from "components/CamperReviews/CamperReviews";
import Booking from "components/Booking/Booking";
import { formattedPrice } from "utils/utils";

import carNotFound from "images/carNotFound.jpg";

import {
  TitleLine,
  SubtitleLine,
  Rating,
  Location,
  PriceLine,
  Gallery,
  Image,
  Description,
  TabSelection,
  Tab,
  TabButton,
  Decoration,
  DetailsBlock,
  CloseButton,
  CloseIcon,
  StarIcon,
  MapIcon,
} from "./CamperDetailsCard.styled";

const CamperDetailsCard = ({ data, onClose }) => {
  const [featuresSelected, setFeaturesSelected] = useState(true);

  const { name, price, rating, location, description, gallery, reviews } = data;

  return (
    <div>
      <TitleLine>
        <p>{name}</p>
        <CloseButton onClick={() => onClose()} aria-label="Close modal">
          <CloseIcon />
        </CloseButton>
      </TitleLine>

      <SubtitleLine>
        <Rating>
          <StarIcon />
          {rating} ({reviews.length} Reviews)
        </Rating>
        <Location>
          <MapIcon />
          {location}
        </Location>
      </SubtitleLine>

      <PriceLine>&euro;{formattedPrice(price)}</PriceLine>

      <Gallery>
        {gallery && gallery.length > 0 ? (
          gallery.map((url, index) => (
            <li key={index}>
              <Image src={url} alt="Camper photo" />
            </li>
          ))
        ) : (
          <li>
            <Image src={carNotFound} alt="Image unavailable" />
          </li>
        )}
      </Gallery>

      <Description>{description}</Description>

      <TabSelection>
        <Tab selected={featuresSelected}>
          <TabButton onClick={() => setFeaturesSelected(true)}>Features</TabButton>
        </Tab>
        <Tab selected={!featuresSelected}>
          <TabButton onClick={() => setFeaturesSelected(false)}>Reviews</TabButton>
        </Tab>
      </TabSelection>

      <Decoration />

      <DetailsBlock>
        {featuresSelected ? <CamperFeatures data={data} /> : <CamperReviews reviews={reviews} />}
        <Booking />
      </DetailsBlock>
    </div>
  );
};

export default CamperDetailsCard;
