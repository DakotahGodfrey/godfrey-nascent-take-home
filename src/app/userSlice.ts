import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Pokemon, User } from "types";

const initialState: User = {
  firstName: "",
  lastName: "",
  phone: "",
  address: "",
  email: "",
  pokemon: null,
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
    updatePokemon: (state, action: PayloadAction<Pokemon>) => {
      state.pokemon = action.payload;
    },
    clearPokemon: (state) => {
      state.pokemon = null;
    },
    clearUser: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.address = "";
      state.phone = "";
      state.email = "";
    },
    clearAll: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.address = "";
      state.phone = "";
      state.email = "";
      state.pokemon = null;
    },
  },
});

export const {
  updateFirstName,
  updateLastName,
  updatePhone,
  updateAddress,
  updateEmail,
  updatePokemon,
  clearUser,
  clearPokemon,
  clearAll,
} = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
