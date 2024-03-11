import {useState, useEffect} from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { toggleIsLoadingSearch, setRecommendedResults, clearSearch, setSearchResults, setSearchTerm, useSearchMovieMutation, useSearchMovieIdMutation } from "../store";
import SearchDropdown from "./SearchDropdown";
import { useDispatch, useSelector } from "react-redux";
import RecommendedDropdown from "./RecommendedDropdown";
import SelectedMovie from "./SelectedMovie";
import { ThreeCircles } from "react-loader-spinner";

function Searchbar () {
    const dispatch = useDispatch();
    const searchTerm = useSelector(state => state.form.searchTerm)
    const searchResults = useSelector(state => state.form.searchResults)
    const [searchMovie, {data, isLoading}] = useSearchMovieMutation();
    const [isRecResults, setIsRecResults] = useState(false)
    const [noResults, setNoResults] = useState(false)

    useEffect(() => {
        if (isLoading){
            dispatch(toggleIsLoadingSearch(true))
        }else{
            dispatch(toggleIsLoadingSearch(false))
        }
        dispatch(setSearchResults(data))
        if (data && data.length === 0){
            setNoResults(true)
        }else{
            setNoResults(false)
        }
    },[data, isLoading])

    const handleSearchButton = (event) => {
        event.preventDefault();
        setIsRecResults(false)
        if(searchTerm.length >= 2){
           searchMovie(searchTerm)
        }else {
            console.log("Term too short")
        }
    }
    const handleClearSearchTerm = () => {
        dispatch(clearSearch())
        setNoResults(false)
    }

    const searchDropdown = searchResults ? searchResults.map((movie) => {
        return <div key={movie.id} className="p-1 md:w-fill"><SearchDropdown title={movie.title} id={movie.id} image={movie.image} year={movie.releaseDate}/></div>
    })
    : null;

    const clearSearchTermButton = <span onClick={handleClearSearchTerm} className="flex items-center text-white text-lg bg-gray-700 border-solid border-2 border-r-0 border-l-0 border-orange-500 cursor-pointer"><MdOutlineCancel/></span>

    const selectedMovieDropdown = <SelectedMovie/>

    const spinnerDiv = <div className="flex justify-center"><ThreeCircles color="#f97316"/></div>

    const noResultsDiv =<div><p className="text-white">There were no matches to your search</p></div>

    return(
        <form onSubmit={handleSearchButton}>
            <div className=" pt-5 md:flex md:flex-col justify-center items-center">
            <div className="flex justify-center p-5 md:w-3/5">
                <input 
                placeholder="Enter Movie Name"
                value={searchTerm}
                onChange={(event) => dispatch(setSearchTerm(event.target.value))}
                className="bg-gray-700 border-2 border-r-0 border-orange-500 rounded-l-lg h-10 text-white w-3/5 p-1" />
                {searchTerm && clearSearchTermButton}
                <div onClick={handleSearchButton} className="px-3 bg-gray-700 flex items-center text-white border-2 rounded-r-lg border-l-0 border-orange-500 hover:bg-orange-500">
                    <FaSearch/>
                </div>
            </div>
            <div className="flex flex-col px-6 md:w-4/5 md:flex-row md:flex-wrap justify-center">
                {!isLoading && searchDropdown}
                {isLoading && spinnerDiv}
                {noResults && noResultsDiv}
            </div>
            <div>
                {selectedMovieDropdown}
            </div>
        </div>
        </form>
        
    )
}
export default Searchbar;