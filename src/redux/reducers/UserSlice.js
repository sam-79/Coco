import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchUsers } from '../../api/fetchUsers';


const getUsers = createAsyncThunk('users/getUsers',
    async (thunkAPI) => {
        // return await fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(res => res.json())
        //     .then((jsonRes) => JSON.stringify(jsonRes))
        //     .catch(err => {err})

        let promise = new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(result => { resolve(result) })
                .catch(error => { reject(error) });
        })

        return promise;
    })

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(getUsers.fulfilled, (state, { payload }) => {
                state.users = payload
                state.loading = false
                state.error = null
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.error = action.error.message
                state.loading = false
                state.users = null
            })
            .addDefaultCase((state) => {
                state.users = null
                state.loading = false
                state.error = null
            })
    }
})

export { getUsers };
export default userSlice.reducer 