import { createSlice } from "@reduxjs/toolkit";
import { fetchProjects } from "../../services/gitHubService";
import { fetchProjectsById } from "../../services/gitHubService";


const initialState = {
    allProjects: [],
    user:{},
    isLoading: false,
    error: ''
}

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchProjects.pending,(state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchProjects.fulfilled,(state,action) => {
            state.isLoading = false;
            state.allProjects = action.payload;
            state.error = ''
        })
        builder.addCase(fetchProjects.rejected,(state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        /////////////////////////////////////////////////
        builder.addCase(fetchProjectsById.pending,(state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchProjectsById.fulfilled,(state,action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.error = ''
        })
        builder.addCase(fetchProjectsById.rejected,(state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

const {actions, reducer} = projectsSlice;

export default reducer;
export const {} = actions;