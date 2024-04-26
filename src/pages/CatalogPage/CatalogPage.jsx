import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterSidebar from "components/FilterSidebar/FilterSidebar";
import CatalogList from "components/CatalogList/CatalogList";
import Loader from "components/Loader/Loader";
import { loadFirstCampers, loadMoreCampers } from "store/thunks";
import { Modal } from "components/Modal/Modal";
import { selectCampers, selectPrevRespLength, selectIsLoading, selectError } from "store/selectors";
import { Wrapper, ListBox, LoadMoreButton } from "./CatalogPage.module";
import Container from "components/Container/Container";

import { LIMIT_PER_PAGE } from "api/adverts";
import { disableScrolling } from "utils/utils";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const prevRespLength = useSelector(selectPrevRespLength);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [showModal, setShowModal] = useState(false);
  const [selectedCamper, setSelectedCamper] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page === 1) {
      dispatch(loadFirstCampers());
    } else {
      dispatch(loadMoreCampers(page));
    }
  }, [dispatch, page]);

  const toggleModal = data => {
    disableScrolling(!showModal);
    setShowModal(!showModal);
    setSelectedCamper(data);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <FilterSidebar />
          <ListBox>
            {error && <p>Unfortunately, an error has occured!</p>}
            {campers.length !== 0 && <CatalogList campers={campers} toggleModal={toggleModal} />}
            {prevRespLength === LIMIT_PER_PAGE && (
              <LoadMoreButton type="button" onClick={handleLoadMore}>
                Load more
              </LoadMoreButton>
            )}
          </ListBox>
        </Wrapper>
      </Container>
      {isLoading && <Loader />}
      {showModal && <Modal onClose={toggleModal} campers={selectedCamper} />}
    </>
  );
};

export default CatalogPage;
