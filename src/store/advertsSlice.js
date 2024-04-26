import { createSlice } from "@reduxjs/toolkit";
import { loadFirstCampers, loadMoreCampers } from "./thunks";
import {
  handleFulfilledLoadFirst,
  handleFulfilledLoadMore,
  handlePending,
  handleRejected,
} from "./handlers";

const PENDING = "pending";
const REJECTED = "rejected";

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    items: [],
    prevRespLength: 0,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(loadFirstCampers.fulfilled, handleFulfilledLoadFirst)
      .addCase(loadMoreCampers.fulfilled, handleFulfilledLoadMore)
      .addMatcher(action => action.type.endsWith(PENDING), handlePending)
      .addMatcher(action => action.type.endsWith(REJECTED), handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
