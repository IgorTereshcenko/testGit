import axios from "axios";
import { createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk(
    'projects/fetchAll',
        async (subject,thunkAPI,page = 1,per_page = 10) => {
            try {
                const response = await axios.get(`https://api.github.com/search/repositories?q=${subject}&page=${page}&per_page=${per_page}`);
                return response.data;
            } catch(e) {
                return thunkAPI.rejectWithValue(e.message);
            }
        }
)

export const fetchProjectsById = createAsyncThunk(
    'projects/fetchById',
        async (username,thunkAPI) => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}`);
                return response.data
            } catch(e) {
                return thunkAPI.rejectWithValue(e.message);
            }
        }
)