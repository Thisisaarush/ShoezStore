import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type AppDispatch = typeof store.dispatch;
