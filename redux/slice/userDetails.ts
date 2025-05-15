import { UserDetails } from "@/utils/data";
import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: <UserDetails>{
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    date: "",
    message: "",
  },
  reducers: {
    setUserDetails: (state, { payload }) => {
      return payload;
    },
    clearUserDetails: () => {
      return {
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        date: "",
        message: "",
      };
    },
  },
});

const { reducer, actions } = userDetailsSlice;
export const { setUserDetails, clearUserDetails } = actions;
export default reducer;
