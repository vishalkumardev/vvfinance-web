import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authorized: !!localStorage.getItem("userToken"),
    role: localStorage.getItem("role") || "public",
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken");
      localStorage.removeItem("role");
      state.authorized = false;
      state.role = "public";
    },
    login: (state, action) => {
      localStorage.setItem("userToken", action.payload?.token);
      localStorage.setItem("role", action.payload?.role);
      state.authorized = true;
      state.role = action.payload.role;
    },
  },
});

export const { logout, login } = authSlice.actions;
export default authSlice.reducer;
