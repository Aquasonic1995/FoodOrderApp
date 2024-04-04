import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loadState} from "./storage.ts";

 export const JWT_STATE = 'userData';
export interface UserState {
    jwt:string|null
}
export interface userPersistentState{
    jwt: string | null
}
const initialState:UserState ={
    jwt:loadState<userPersistentState>(JWT_STATE)?.jwt ?? null
};
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addJwt:(state, action:PayloadAction<string>)=>{
            state.jwt = action.payload;
        },
        logout:(state) =>{
            state.jwt = null;
        },
    }
});

export default userSlice.reducer;
export const userActions=userSlice.actions;