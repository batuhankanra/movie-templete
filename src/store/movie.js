import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const url=import.meta.env.VITE_API_URL
const key=import.meta.env.VITE_API_KEY

export const getMovieApi=createAsyncThunk('movie/fetchData',async ()=>{
    const response=await axios.get(url,{
        headers:{
            Accept: 'application/json',
            Authorization: `Bearer ${key} ` 
        }
    })
    const data= response.data.results
    const DataFetch=data.map(item=>({
        ...item,
        vote_average:Number(item.vote_average.toFixed(1))
    }))
    return DataFetch
})



















const movieSlice=createSlice({
    name:'Movie',
    initialState:{
        data:[],
        filterData:[],
        status:'idle',
        error:null
    },
    reducers:{
        filterMovies:(state,action)=>{
            const fData=state.data.filter(d=>d.title.toLowerCase().includes(action.payload))
            state.filterData=fData
        }

    },
    extraReducers:(builder)=>{
        builder
            .addCase(getMovieApi.pending,(state)=>{state.status='loading'})
            .addCase(getMovieApi.fulfilled,(state,action)=>{
                state.status='success'
                state.data=action.payload
            })
            .addCase(getMovieApi.rejected,(state,action)=>{
                state.status='Fail'
                state.error=action.payload

            })

    }
})
export const {filterMovies}=movieSlice.actions
export default movieSlice.reducer