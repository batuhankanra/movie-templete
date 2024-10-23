import { configureStore } from "@reduxjs/toolkit";

import movieSlice from './movie.js'
import modal from './modal.js'


export const store=configureStore({
    reducer:{
        movie:movieSlice,
        modal
    }
})