import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersAPI";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersData: [],
        currentUser: null
    },
    reducers: {
        logIn(state, {payload: {email, password}}){
            state.currentUser = state.usersData.find(user => (user.email === email || user.username === email) && user.password === password) || null
        },
        logOut(state){
            state.currentUser = null
        }
    },

    extraReducers: {
        [fetchUsers.fulfilled]: (state, {payload}) => {
            state.usersData = [...payload]
        }
    }
})


export const selectUsers = state => state.users

export const {logIn, logOut} = usersSlice.actions

export const usersReducer = usersSlice.reducer