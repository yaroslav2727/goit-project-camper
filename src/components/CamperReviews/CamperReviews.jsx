import ReactStars from "react-rating-stars-component";
import {
  List,
  ProfilePic,
  FirstLetter,
  ReviewHeader,
  Name,
  ReviewBody,
  NameBlock,
} from "./CamperReviews.module";

const CamperReviews = ({ reviews }) => {
  return (
    <List>
      {reviews &&
        reviews.map(({ comment, reviewer_name, reviewer_rating }, index) => (
          <li key={index}>
            <ReviewHeader>
              <ProfilePic>
                <FirstLetter>{reviewer_name[0]}</FirstLetter>
              </ProfilePic>
              <NameBlock>
                <Name>{reviewer_name}</Name>
                <ReactStars
                  color="var(--color-pale)"
                  activeColor="var(--color-rating)"
                  size={18}
                  edit={false}
                  value={reviewer_rating}
                />
              </NameBlock>
            </ReviewHeader>

            <ReviewBody>{comment}</ReviewBody>
          </li>
        ))}
    </List>
  );
};

export default CamperReviews;
