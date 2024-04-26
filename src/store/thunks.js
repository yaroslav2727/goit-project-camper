import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAdverts } from "api/adverts";

const LOAD_FIRST = "api/loadFirst";
const LOAD_MORE = "api/loadMore";

export const loadFirstCampers = createAsyncThunk(LOAD_FIRST, async (_, { rejectWithValue }) => {
  try {
    const resp = await fetchAdverts();
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const loadMoreCampers = createAsyncThunk(LOAD_MORE, async (page, { rejectWithValue }) => {
  try {
    const resp = await fetchAdverts(page);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
