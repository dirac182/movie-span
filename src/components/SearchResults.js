import { useSelector, useDispatch } from "react-redux"
import { setEndTime } from "../store"
import { useEffect } from "react"
import { Watch } from "react-loader-spinner"

function SearchResults() {
    const dispatch = useDispatch()
    const movieSearchResults = useSelector(state => state.form.selectedMovieResults)
    const timeHr = useSelector(state => state.form.clockHr)
    const timeMin = useSelector(state => state.form.clockMin)
    const isPm = useSelector(state => state.form.isPm)
    const atTheater = useSelector(state => state.form.atTheater)
    const endTime = useSelector(state => state.form.endTime)
    const isLoadingResults = useSelector(state => state.form.isLoadingResults)

    useEffect(() => {
        const timeToAdd = movieSearchResults.movieRuntime
        console.log(endTime)
        if (timeToAdd){
            const amPm = isPm ? "PM" : "AM"
            const newTime = new Date(`01/01/2001 ${parseInt(timeHr)}:${parseInt(timeMin)} ${amPm}`)
            if (atTheater){
                const newSeconds = parseInt(timeToAdd) + 1380
                newTime.setSeconds(newTime.getSeconds() + newSeconds)
            }else{
                newTime.setSeconds(newTime.getSeconds() + timeToAdd)
            }
            const options = { hour: 'numeric', minute: '2-digit', hour12: true };
            const newTimeString = newTime.toLocaleTimeString('en-US', options);
            dispatch(setEndTime(newTimeString))
        }  
    },[timeHr,timeMin, isPm, atTheater, movieSearchResults])

    const endTimeDiv = endTime != "Invalid Time" ? <div className="text-center font-bold text-orange-500 text-4xl pt-7 px-5">
        <p>Your movie will end around {endTime}</p>
    </div>
    : <div className="text-center font-bold text-orange-500 text-4xl pt-7 px-5"><p>{endTime}</p></div>


    const spinnerDiv = <div className="flex justify-center"><Watch color="#f97316"/></div>
      
   return(
        <div>
            {endTime && endTimeDiv}
            {!endTime && spinnerDiv}
        </div>
    )
}

export default SearchResults