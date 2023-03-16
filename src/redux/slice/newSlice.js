import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {v4 as uuid} from "uuid"

const newSlice = createSlice({
    name: "New Products",
    initialState: {
        value:[],
        status: "pending",
        error: null
    },
    reducers: {},
    extraReducers: builder => builder
    .addCase(FetchProductSlice.pending,(state,  action)=>{
        state.status = "pending";
    })
    .addCase(FetchProductSlice.rejected,(state,  action)=>{
        state.status = "rejected";
        state.error = action.payload;
    })
    .addCase(FetchProductSlice.fulfilled,(state,  action)=>{
        state.status = "fulfilled";
        state.value = action.payload
    })

});

export const FetchProductSlice= createAsyncThunk("New Arrivals/fetch", async ()=>{
    const url = "https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789867/React%20Class/M.%20Lavanya%20Prabhu/best_selling_fkvm9x.json"
    try{
        const {data} = await axios.get(url);
        return data.map(e => ({...e,id:uuid()}))

    }catch(error){
        return error.message
    }
   
})

export default newSlice;