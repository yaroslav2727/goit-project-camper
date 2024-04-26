import { useDispatch, useSelector } from "react-redux";

import { addFavorite, deleteFavorite } from "store/favoritesSlice";
import { selectFavorites } from "store/selectors";

import { isAlreadyFavorite, formattedPrice, shortenText, capitalizeFirstLetter } from "utils/utils";

import carNotFound from "images/carNotFound.jpg";

import {
  ListItem,
  MainImage,
  TitleLine,
  PriceBlock,
  SubtitleLine,
  Rating,
  Location,
  Description,
  TagList,
  TagItem,
  ShowMoreButton,
  HeartButton,
  HeartIcon,
  AcIcon,
  AdultIcon,
  AutomaticIcon,
  BedsIcon,
  FuelIcon,
  KitchenIcon,
  MapIcon,
  StarIcon,
} from "./CatalogListItem.module";

const CatalogListItem = ({ camper, toggleModal }) => {
  const {
    _id,
    name,
    gallery,
    price,
    rating,
    reviews,
    location,
    description,
    adults,
    transmission,
    engine,
    details,
  } = camper;

  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    if (isAlreadyFavorite(_id, favorites)) {
      dispatch(deleteFavorite(camper));
    } else {
      dispatch(addFavorite(camper));
    }
  };

  return (
    <ListItem>
      <MainImage src={gallery[0] ? gallery[0] : carNotFound} alt={name} />
      <div>
        <TitleLine>
          <p>{name}</p>
          <PriceBlock>
            <p>&euro;{formattedPrice(price)}</p>
            <HeartButton aria-label="Add to favorites" onClick={handleFavoriteClick}>
              <HeartIcon $favorited={isAlreadyFavorite(_id, favorites)} width={24} />
            </HeartButton>
          </PriceBlock>
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

        <Description>{shortenText(description)}...</Description>

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

          {details.airConditioner > 0 && (
            <TagItem>
              <AcIcon />
              {details.airConditioner && "AC"}
            </TagItem>
          )}
        </TagList>

        <ShowMoreButton type="button" onClick={() => toggleModal(camper)}>
          Show more
        </ShowMoreButton>
      </div>
    </ListItem>
  );
};

export default CatalogListItem;
