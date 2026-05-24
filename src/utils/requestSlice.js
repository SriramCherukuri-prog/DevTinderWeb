import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const requestSlice = createSlice({
    name:"requests",
    initialState:null,
    reducers:{
        addRequests:(state,action)=>{
            return action.payload
        },
       
    }
})


export const {addRequests} = requestSlice.actions


export default requestSlice.reducer

