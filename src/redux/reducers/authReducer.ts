import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  login: string;
  password: string;
}

const initialState: AppState = {
  login: "",
  password: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    submit: (state, action: PayloadAction<AppState>) => {
        state.login = action.payload.login
        state.password = action.payload.password
    },
  },
});

export const { submit } = authSlice.actions;
