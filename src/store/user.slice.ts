import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loadState} from "./storage.ts";
import axios from "axios";
import {LoginResponse} from "../Components/interfaces/auth.interface.ts";
import {BASE_URL} from "../helpers/API.ts";

export const JWT_STATE = 'userData';

export interface UserState {
    jwt: string | null
}

export interface userPersistentState {
    jwt: string | null
}

const initialState: UserState = {
    jwt: loadState<userPersistentState>(JWT_STATE)?.jwt ?? null
};
export const login = createAsyncThunk('user/login',
    async (params: { email: string, password: string }) => {
        const {data} = await axios.post<LoginResponse>(`${BASE_URL}/auth/login`, {
            email: params.email,
            password: params.password
        });
        return data;
    }
);
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.jwt = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled,
            (state, action: PayloadAction<LoginResponse>) => {
                state.jwt = action.payload.access_token;
            });
        builder.addCase(login.rejected,
            (state, error)=>{
            console.log(error);
            }
            );
    }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;