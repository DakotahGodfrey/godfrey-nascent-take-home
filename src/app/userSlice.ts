import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { User } from "types";

const initialState: User = {
  firstName: "",
  lastName: "",
  phone: "",
  address: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    updateLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    updatePhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    updateAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const {
  updateFirstName,
  updateLastName,
  updatePhone,
  updateAddress,
  updateEmail,
} = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
