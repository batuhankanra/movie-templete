import { configureStore } from "@reduxjs/toolkit";

import movieSlice from './movie.js'


export const store=configureStore({
    reducer:{
        movie:movieSlice
    }
})