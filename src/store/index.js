import { combineReducers, configureStore } from "@reduxjs/toolkit";
import projectsReducer from './slices/projectsSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'project',
    storage
}

const rootReducers = combineReducers({
    projectsReducer
})

const persistedReducer = persistReducer(persistConfig,rootReducers);

export let store = configureStore({
    reducer:persistedReducer
})
export let persistor = persistStore(store);