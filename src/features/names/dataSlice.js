// store/dataSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk("data/fetchItems", async () => {
  try {
    const response = await axios.get(
      //"https://functions-ww-app.azurewebsites.net/api/hybridcall?apiPath=PS&functionPath=GetJobs"
      "https://wwweb/portal/DesktopModules/ww_Global/API/PS/GetJobs"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default dataSlice.reducer;
