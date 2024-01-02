import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

export const RegisterUsers = createAsyncThunk(('registeruser'), (user : AxiosRequestConfig<any> | object) => {
    return axios
      .post('https://travel-api-will.onrender.com/api/register', user)
      .then(response => response.data.savedUser)
  })

type InitialState = {
  currentUser: user | null
  isFetching: boolean | false
  error: boolean | null
}

const initialState: InitialState = {
  currentUser: null,
  isFetching: false,
  error: null
}



const RegisterSlice = createSlice({
    name: "registeruser",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(RegisterUsers.pending, state => {
          state.isFetching = true
          state.currentUser = null
        })
        builder.addCase(
          RegisterUsers.fulfilled,
          (state, action: PayloadAction<user>) => {
            state.isFetching = false
            state.currentUser = action.payload
            state.error = false
          }
        )
        builder.addCase(RegisterUsers.rejected, (state, action) => {
          state.isFetching = false
          state.currentUser = null
          state.error = true
        })
      }
  });


  export default RegisterSlice.reducer;
