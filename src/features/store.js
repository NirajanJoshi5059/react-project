import { configureStore } from "@reduxjs/toolkit";
import ifnoReducer from './infoSlice';

export const store=configureStore({
    reducer:{
        todos:ifnoReducer
    }
});