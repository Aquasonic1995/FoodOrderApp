import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./user.slice.ts";


export const store = configureStore({
    reducer:
        {
            user:userSlice
        }
});

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch