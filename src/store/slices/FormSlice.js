import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "form",
    initialState: {
        searchTerm: "",
        searchResults: [],
        recommendedResults: [],
        selectedMovieId: null,
        selectedMovie: false,
        selectedMovieInfo: [],
        selectedMovieResults: {},
        clockHr: 7,
        clockMin: 30,
        isPm: true,
        atTheater: true,    
        endTime: null,
        isLoadingSearch: false,
        isLoadingResults: false,
        genreList: [],
        castList: [],
        relatedMoviesList: []
    },
    reducers: {
        setResultLists(state,action){
            state.genreList = action.payload.genreList;
            state.castList = action.payload.castList;
            state.relatedMoviesList = action.payload.relatedMoviesList;
        },
        setSelectedMovieId(state,action){
            state.selectedMovieId = action.payload;
        },
        setSearchResults(state,action){
            state.searchResults = action.payload;
        },
        setSearchTerm(state,action){
            state.searchTerm = action.payload;
        },
        clearSearch(state){
            state.searchResults = []
            state.searchTerm = ""
        },
        setRecommendedResults(state,action){
            state.recommendedResults = action.payload
        },
        setSelectedMovieInfo(state,action){
            state.selectedMovie = true
            state.selectedMovieInfo = action.payload
            state.searchResults = []
        },
        clearSelected(state,action){
            state.selectedMovie = false
            state.selectedMovieInfo = []
            state.searchTerm = ""
            state.endTime = null
            state.selectedMovieId = null
        },
        setSelectedMovieResults(state,action){
            state.selectedMovieResults = action.payload
        },
        setClockHr(state,action) {
            state.clockHr = action.payload
        },
        setClockMin(state,action){
            state.clockMin = action.payload
        },
        setIsPm(state,action){
            state.isPm = action.payload
        },
        setAtTheater(state,action){
            state.atTheater = action.payload
        },
        setEndTime(state,action){
            state.endTime = action.payload
        },
        toggleIsLoadingSearch(state,action){
            state.isLoadingSearch = action.payload
        },
        toggleIsLoadingResults(state,action){
            state.isLoadingSearch = action.payload
        },
    }
})

export const { setResultLists, setSelectedMovieId, toggleIsLoadingSearch, toggleIsLoadingResults, setEndTime, setAtTheater, setIsPm, setClockHr, setClockMin, setSelectedMovieResults, clearSelected, setSelectedMovieInfo, setRecommendedResults, setSearchResults, setSearchTerm, clearSearch } = formSlice.actions; 
export const formReducer = formSlice.reducer;