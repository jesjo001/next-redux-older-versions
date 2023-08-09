"use client"
import TokenService from "../../../utils/TokenService"
import { createSlice } from "@reduxjs/toolkit"
import jwtDecode from "jwt-decode"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: TokenService.getUser(),
    token: TokenService.getLocalAccessToken(),
  },
  reducers: {
    setCredentials: (state, action) => {
      const { response } = action.payload;

      //decode and store current user
      const decodedUser = jwtDecode(response?.accessToken);
      //store user in state
      state.user = decodedUser;
      state.token = response.accessToken;

      TokenService.updateLocalAccessToken(response);
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      TokenService.removeUser();
    },

    updateUser: (state, action) => {
      const { users } = action.payload;
      state.user = users;
    },
  },
});

export const { setCredentials, logOut, updateUser } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => {
    if(state?.auth?.user) return state.auth.user

    return null;
}
export const selectCurentToken = (state) => {
    if(state?.auth?.token) return state.auth.token

    return null
}