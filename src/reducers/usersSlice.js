import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useHttp} from '../hooks/http.hook';

const initialState = {
    users: '',
    readonly: true,
    usersLoadingStatus: 'start',

}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (data = 'users') => {
        const {request} = useHttp();

        if (data === 'users') {
        return await request("https://jsonplaceholder.typicode.com/users/");
        }

        else {
            const res =  await request("https://jsonplaceholder.typicode.com/users/")
            return res.filter(item => item.id === data)
        }
    }
);


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setReadOnly: (state, action) => {
            state.readonly = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, state => {state.usersLoadingStatus = 'loading'})
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.usersLoadingStatus = 'idle';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, state => {
                state.usersLoadingStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
});


const {actions, reducer} = usersSlice;

export default reducer;
export const {
    setReadOnly,
    setUser
} = actions;