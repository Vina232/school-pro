import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// Get all user action
export const getAllPosts = createAsyncThunk("getPosts", async () => {
  axios.get("https://jsonplaceholder.typicode.com/posts");

  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log('---res',response.data);
  return response.data; //--- data
});

export const getPost = createSlice({
  name: "posts",
  //--- state ---------
  initialState: { 
    posts: [],
    loading: false, /// no loading at initial stage
    error: null, // no error
  },
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.loading = true;
    },
    [getAllPosts.fulfilled]: (state, action) => {
      console.log('---payload',action.payload);
      state.loading = false;
      state.posts = action.payload;
    },
    [getAllPosts.rejected]: (state, action) => {
    console.log('---payloaderror',action.payload);

      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default getPost.reducer;