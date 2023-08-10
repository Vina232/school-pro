import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get all user action
export const getAllUser = createAsyncThunk("getUsers", async () => {
  axios.get("https://jsonplaceholder.typicode.com/users");

  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log('---res',response.data);
  return response.data; //--- data
});



export const getUser = createSlice({
  name: "user",
  //--- state ---------
  initialState: { 
    users: [],
    loading: false, /// no loading at initial stage
    error: null, // no error
  },
  extraReducers: {
    [getAllUser.pending]: (state) => {
      state.loading = true;
    },
    [getAllUser.fulfilled]: (state, action) => {
      console.log('---payload',action.payload);
      state.loading = false;
      state.users = action.payload;
    },
    [getAllUser.rejected]: (state, action) => {
    console.log('---payloaderror',action.payload);

      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default getUser.reducer;
