import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClockHr, setClockMin, setAtTheater, setIsPm } from "../store";

function SearchForm () {
    const dispatch = useDispatch();
    const atTheater = useSelector(state => state.form.atTheater)
    const isPm = useSelector(state => state.form.isPm)
    const clockHr = useSelector(state => state.form.clockHr)
    const clockMin = useSelector(state => state.form.clockMin)
    const now = new Date();
    const userTimeHr = now.getHours();
    const userTimeMin = now.getMinutes();

    // useEffect(()=> {
    //     if (clockHr > 12){
    //         dispatch(setClockHr(13))
    //     }
    //     if (clockHr < 0){
    //         dispatch(setClockHr(1))
    //     }
    //     if (clockMin > 59){
    //         dispatch(setClockMin(59))
    //     }
    //     if (clockMin < 0){
    //         dispatch(setClockMin(0))
    //     }
    // },[clockHr, clockMin])

    useEffect(() => {
        dispatch(setClockHr(userTimeHr))
        dispatch(setClockMin(userTimeMin))
        const roundedMinutes = (Math.ceil(userTimeMin / 5) * 5).toString().padStart(2, '0');
        if (roundedMinutes == 60){
            dispatch(setClockMin(0))
            dispatch(setClockHr(clockHr+1))
        }else{
            dispatch(setClockMin(roundedMinutes));
        }
        if (userTimeHr < 11){
            dispatch(setIsPm(false))
        }
        if (userTimeHr >= 13){
            dispatch(setClockHr(userTimeHr - 12))
        }
    }, [userTimeHr, userTimeMin])
    
    const handleTheaterToggle = (atTheater) => {
        dispatch(setAtTheater(atTheater));
    };
    
    const handleTimeOfDayToggle = (isPm) => {
        dispatch(setIsPm(isPm));
    };

    const handleAddHour = () => {
        // const modifiedHr = clockHr > 12 ? (clockHr - 12) : clockHr
        const amPm = isPm ? "PM" : "AM" 
        console.log(clockHr, clockMin, amPm)
        const newTime = new Date(`2001-01-01 ${parseInt(clockHr+1)}:${parseInt(clockMin)}:00 ${amPm}`)
        if(parseInt(newTime.getHours()) > 12){
            dispatch(setClockHr(newTime.getHours() -12))
        }else{
            dispatch(setClockHr(newTime.getHours()))
        }
        console.log(newTime)
    }
    const handleSubtractHour = () => {
        const amPm = isPm ? "PM" : "AM" 
        console.log(clockHr, clockMin, amPm)
        const newTime = new Date(`2001-01-01 ${parseInt(clockHr-1)}:${parseInt(clockMin)}:00 ${amPm}`)
        if(parseInt(newTime.getHours()) > 12){
                dispatch(setClockHr(newTime.getHours() -12))
        }else{
                dispatch(setClockHr(newTime.getHours()))
            }
        console.log(newTime)
    }
    const handleAddMin = () => {
        if (parseInt(clockMin) < 55) {
            dispatch(setClockMin(parseInt(clockMin)+5))
        }else{
            dispatch(setClockMin("00"))
        }
    }
    const handleSubtractMin = () => {
        if (parseInt(clockMin) > 0 && parseInt(clockMin - 5) >= 0){
            dispatch(setClockMin(parseInt(clockMin) -5))
        } else {
            dispatch(setClockMin(55))
        }
    }

    return(
    <div className="pt-5">    
        <div className="text-white">
            <p className="text-center font-bold text-xl">Where are you watching?</p>
            <div className="flex justify-center">
                <button onClick={() => handleTheaterToggle(true)} className={`bg-gray-700 m-3 p-3 border-solid border-2 rounded-lg border-orange-500 bg-gray-700 ${atTheater ? "bg-orange-500" : ""}`}>In Theaters</button>
                <button onClick={() => handleTheaterToggle(false)} className={`bg-gray-700 m-3 p-3 border-solid border-2 rounded-lg border-orange-500 bg-gray-700 ${atTheater ? "" : "bg-orange-500" }`}>At Home</button>
            </div>
            {atTheater ? <p className="text-center text-sm">*Approximate time for ads and trailers will be accounted for.</p> : <span></span>}
        </div>
        <div className="text-white py-3">
            <p className="text-center font-bold text-xl">What time does it start?</p>
            <div className="flex justify-center items-center p-6">
                <div className="flex flex-col">
                    <div onClick={handleAddHour} className="text-3xl text bg-gray-700 border-2 border-b-0 border-solid rounded-t-lg border-orange-500 h-7 hover:bg-orange-500 flex items-start justify-center pt-1 px-4">
                        <button className="relative bottom-2 ">+</button>
                    </div>
                    <input onChange={(event) => dispatch(setClockHr(event.target.value))} className="text-3xl bg-sky-950 border-solid border-r-2 border-l-2 text-center border-orange-500 w-14 h-14" value={clockHr} type="number" />
                    <div onClick={handleSubtractHour} className="text-4xl text bg-gray-700 border-2 border-t-0 border-solid rounded-b-lg border-orange-500 h-7 hover:bg-orange-500 flex items-start justify-center pt-1 px-4">
                        <button className="relative bottom-3 ">-</button>
                    </div>                        
                </div>
                <label className="px-2 text-5xl">:</label>
                <div className="flex flex-col">
                    <div onClick={handleAddMin} className="text-3xl text bg-gray-700 border-2 border-b-0 border-solid rounded-t-lg border-orange-500 h-7 hover:bg-orange-500 flex items-start justify-center pt-1 px-4">
                        <button className="relative bottom-2 ">+</button>
                    </div>
                    <input onChange={(event) => dispatch(setClockMin(event.target.value))} className="text-3xl bg-sky-950 border-solid border-r-2 border-l-2 text-center border-orange-500 w-14 h-14" value={clockMin} type="number" max="59" min="00" />
                    <div onClick={handleSubtractMin} className="text-4xl text bg-gray-700 border-2 border-t-0 border-solid rounded-b-lg border-orange-500 h-7 hover:bg-orange-500 flex items-start justify-center pt-1 px-4">
                        <button className="relative bottom-3 ">-</button>
                    </div>                        
                </div>
                <div className="flex flex-col pl-5">
                    <div onClick={() => handleTimeOfDayToggle(false)} className={`px-2 text-lg text bg-gray-700 border-2 border-b-2 border-solid rounded-t-lg border-orange-500 flex items-start justify-center pt-1 ${isPm ? "" : "bg-orange-500"}`}>
                        <button className="p-2">AM</button>
                    </div>
                    <div onClick={() => handleTimeOfDayToggle(true)} className={`px-2 text-lg text bg-gray-700 border-2 border-b-2 border-solid rounded-b-lg border-orange-500 flex items-start justify-center pt-1 ${isPm ? "bg-orange-500" : ""}`}>
                        <button className="p-2">PM</button>
                    </div>                        
                </div>
            </div>
        </div>
    </div>
    )
}

export default SearchForm;