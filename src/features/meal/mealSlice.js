import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mealsData from "../../dummyData";

const initialState = {
  data: [],
  status: "idle",
};

export const fetchMeals = createAsyncThunk("meals/fetchMeals", async () => {
  // const url = `${process.env.REACT_APP_API_URL || ""}/products`;
  // const response = await fetch(url);
  // if (!response.ok) throw new Error(await response.text());
  // return await response.json();
  return await mealsData;
});

export const mealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    add_new_meal: () => {
      //will do later
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(fetchMeals.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { add_new_meal } = mealSlice.actions;

export const selectMeals = (state) => state.meals.data;
export const selectMealStatus = (state) => state.meals.status;

export default mealSlice.reducer;
