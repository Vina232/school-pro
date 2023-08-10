import { configureStore } from "@reduxjs/toolkit";
import getUser from "../features/getUserSlice";
import getPost from "../features/getPostSlice";

export const store = configureStore({
  reducer: {
    userlist: getUser,
    postslist: getPost,
  },
});