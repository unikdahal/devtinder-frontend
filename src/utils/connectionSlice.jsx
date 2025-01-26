import {createSlice} from "@reduxjs/toolkit";

const ConnectionSlice = createSlice({
    name: "connection",
    initialState: null,
    reducers: {
        addConnection: (state,action)=>{
            return action.payload;
        },
        removeConnection: (state,action)=>{
            let newState = state.filter(connection=> connection.id!==action.payload);
            return newState;
        }
    }
});

export const {addConnection,removeConnection} = ConnectionSlice.actions;
export default ConnectionSlice.reducer;