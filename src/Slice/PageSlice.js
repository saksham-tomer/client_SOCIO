import {createSlice} from '@reduxjs/toolkit'
import * as api from '../api/index'


export const createPost = createAsyncThunk(
        
)




const pageSlice = createSlice(
        name: 'page',
        initialState = [],
        reducers: {
                extraReducers: (builder) => {
                        .addCase(createPost.pending,(state,action)=>{

                        })
                        .addCase(getPost.pending,(state,action)=>{
                                
                        })
                        .addCase(updatePost.pending,(state,action)=>{
                                
                        })
                        .addCase(deletPost.pending,(state,action)=>{
                                
                        })
                        .addCase(likePost.pending,(state,action)=>{
                                
                        })
                }
        }
)
