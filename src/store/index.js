import { configureStore } from '@reduxjs/toolkit';
import {setupListeners} from "@reduxjs/toolkit/query";
import { moviesApi } from './apis/movieApi';
import { setResultLists, setSelectedMovieId, toggleIsLoadingSearch, toggleIsLoadingResults, setEndTime, setAtTheater, setIsPm, setClockHr, setClockMin, setSelectedMovieResults, clearSelected, setSelectedMovieInfo, setRecommendedResults, formReducer, setSearchResults, setSearchTerm, clearSearch } from './slices/FormSlice';

const store = configureStore({
    reducer: {
        form: formReducer,
        [moviesApi.reducerPath]: moviesApi.reducer
    }, 
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(moviesApi.middleware)
    }
})

setupListeners(store.dispatch);
export { setResultLists, setSelectedMovieId, toggleIsLoadingSearch, toggleIsLoadingResults, setEndTime, setAtTheater, setIsPm, setClockHr, setClockMin, setSelectedMovieResults, clearSelected, setSelectedMovieInfo, setRecommendedResults, clearSearch, setSearchResults, setSearchTerm, store };
export { useSearchMovieMutation, useIdSearchMutation } from "./apis/movieApi";