import {configureStore} from "@reduxjs/toolkit";
import userSlice, {JWT_STATE} from "./user.slice.ts";
import {saveState} from "./storage.ts";


export const store = configureStore({
    reducer:
        {
            user:userSlice
        }
});
store.subscribe(()=>
saveState({jwt: store.getState().user.jwt}, JWT_STATE));
export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch