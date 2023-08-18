import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type initialStateType = {
  items: fetchedWeightType[];
  status: "loading" | "succeeded" | "failed" | "idle";
  currentWeight?: number | null;
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
  currentWeight: null,
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
      return {
        ...state,
        items: sortedItems,
        currentWeight: sortedItems.slice(-1)[0].weight,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchInitialItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        state.currentWeight = action.payload.slice(-1)[0].weight;
      })
      .addCase(fetchInitialItems.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addWeight } = weights.actions;
export default weights.reducer;
