import { createSlice } from '@reduxjs/toolkit'
import { userApi } from '../../../../api/user/userAPI.js'

const initialState = {
    isAuth: false,
    userData: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLoggedOut: () => ({
            isAuth: false,
            userData: null
        })
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            userApi.endpoints.checkAuth.matchFulfilled,
            (state, { payload }) => {
                state.isAuth = true
                state.userData = payload
            }
        )
        builder.addMatcher(
            userApi.endpoints.checkAuth.matchRejected,
            (state) => {
                state.isAuth = false
                state.userData = null
            }
        )
    }
})

export const { userLoggedOut } = userSlice.actions
export default userSlice.reducer
