// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import dataReducer from "../features/names/dataSlice";

const store = () =>
  configureStore({
    reducer: {
      data: dataReducer,
    },
  });

export const wrapper = createWrapper(store);
