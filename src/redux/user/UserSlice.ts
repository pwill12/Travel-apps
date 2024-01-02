import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig } from "axios";

type user = {
    id: number
    username: string
    email: string
    phone: Number
    password: string
    admin: boolean
    isUserVerified: boolean | undefined
}

type InitialState = {
    currentUser: user | null
    isFetching: boolean
    error: boolean | null
}

const initialState: InitialState = {
    currentUser: null,
    isFetching: false,
    error: null
}


export const LoginUsers = createAsyncThunk(('user'), (user : AxiosRequestConfig<any> | object) => {
    return axios
      .post('https://travel-api-will.onrender.com/api/login', user)
      .then(response => response.data)
  })

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(LoginUsers.pending, state => {
          state.isFetching = true
        })
        builder.addCase(
          LoginUsers.fulfilled,
          (state, action: PayloadAction<user>) => {
            state.isFetching = false
            state.currentUser = action.payload
            state.error = false
          }
        )
        builder.addCase(LoginUsers.rejected, (state, action) => {
          state.isFetching = false
          state.currentUser = null
          state.error = true
        })
      }
});

export default userSlice.reducer;
