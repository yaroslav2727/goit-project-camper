export const handleFulfilledLoadFirst = (state, { payload }) => {
  state.items = payload;
  state.prevRespLength = payload.length;
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledLoadMore = (state, { payload }) => {
  state.items.push(...payload);
  state.prevRespLength = payload.length;
  state.isLoading = false;
  state.error = null;
};

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { error }) => {
  state.error = error.message;
  state.isLoading = false;
};
