import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "../helper/persistState";
import { authSlice } from "./reducers/authReducer";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
