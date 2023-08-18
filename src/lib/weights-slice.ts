import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type initialStateType = {
  items: fetchedWeightType[];
  status: "loading" | "succeeded" | "failed" | "idle";
};

type fetchedWeightType = {
  weight: number;
  date: Date;
};

export const fetchInitialItems = createAsyncThunk(
  "items/fetchInitialItems",
  async () => {
    const { data } = await axios.get("/api/get-weights");
    return data;
  }
);

const initialState: initialStateType = {
  items: [],
  status: "idle",
};

export const weights = createSlice({
  name: "weights",
  initialState,
  reducers: {
    addWeight: (state, action: PayloadAction<fetchedWeightType>) => {
      const array = [...state.items, action.payload];
      const sortedItems = array.sort(
        (a, b) => Number(new Date(a.date)) - Number(new Date(b.date))
      );
      console.log(array, sortedItems);

      return {
        ...state,
        items: sortedItems,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchInitialItems.fulfilled,
        (state, action: PayloadAction<fetchedWeightType[]>) => {
          state.status = "succeeded";
          state.items = action.payload;
        }
      )
      .addCase(fetchInitialItems.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addWeight } = weights.actions;
export default weights.reducer;
