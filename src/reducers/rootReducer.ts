import { combineReducers } from "@reduxjs/toolkit";
import { carousel } from "./carousel";

export const rootReducer = combineReducers({
  carousel,
});

export type RootState = ReturnType<typeof rootReducer>;
