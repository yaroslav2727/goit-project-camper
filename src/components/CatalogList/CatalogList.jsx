import CatalogListItem from "components/CatalogListItem/CatalogListItem";
import { List } from "./CatalogList.module";

const CatalogList = ({ campers, toggleModal }) => {
  return (
    <List>
      {campers &&
        campers.map(item => (
          <CatalogListItem key={item._id} camper={item} toggleModal={toggleModal} />
        ))}
    </List>
  );
};

export default CatalogList;
