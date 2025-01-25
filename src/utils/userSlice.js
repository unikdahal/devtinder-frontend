import {createSlice} from "@reduxjs/toolkit";

// Initial state for the user slice
const initialState = null;

const userSlice = createSlice({
    name: "user", initialState, reducers: {
        addUser: (state, action) => action.payload, removeUser: () => null,
    },
});

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;