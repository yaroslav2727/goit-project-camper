import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "store/selectors";

import FilterSidebar from "components/FilterSidebar/FilterSidebar";
import CatalogList from "components/CatalogList/CatalogList";
import Container from "components/Container/Container";
import { Modal } from "components/Modal/Modal";

import { Wrapper, ListBox } from "./FavoritesPage.module";
import { disableScrolling } from "utils/utils";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  const [showModal, setShowModal] = useState(false);
  const [selectedCamper, setSelectedCamper] = useState(null);

  const toggleModal = data => {
    disableScrolling(!showModal);
    setShowModal(!showModal);
    setSelectedCamper(data);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <FilterSidebar />
          <ListBox>
            <CatalogList campers={favorites} toggleModal={toggleModal} />
          </ListBox>
        </Wrapper>
      </Container>
      {showModal && <Modal onClose={toggleModal} campers={selectedCamper} />}
    </>
  );
};

export default FavoritesPage;
