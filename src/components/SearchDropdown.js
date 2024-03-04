import { setSelectedMovieInfo, useIdSearchMutation } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMovieResults, toggleIsLoadingResults } from "../store";
import { useEffect } from "react";

function SearchDropdown({title, id, image, year}) {
    const dispatch = useDispatch();
    const releaseYear = year ? `(${year})`: ""
    const [searchMovieId, {data, isLoading, isFetching, error, isSuccess}] = useIdSearchMutation();


    const handleMovieClick = () => {
        console.log("dropdown clicked")
        dispatch(setSelectedMovieInfo({title,id,image,year}))
        // dispatch(toggleIsLoadingResults(true))
        searchMovieId(id)
        .then((data) => {
            // Check the result or add more logging if needed
            console.log(data.data);
            dispatch(setSelectedMovieResults(data.data))
            // dispatch(toggleIsLoadingResults(false))
          })
          .catch((error) => {
            // Handle errors if necessary
            console.error("searchMovieId mutation error:", error);
          });
    }

    return(
        <div onClick={handleMovieClick} className="flex text-white items-center bg-gray-700 border-solid border-2 rounded-xl border-orange-500 hover:bg-gray-800 cursor-pointer md:w-fill md:p-2">
            <img style={{width:"55px", height:"85px", borderRadius: "10px"}} src={image}/>
            <p className="px-2 text-lg font-bold">{title}</p>
            <p className="pr-2">{releaseYear}</p>
        </div>
    )
}

export default SearchDropdown;