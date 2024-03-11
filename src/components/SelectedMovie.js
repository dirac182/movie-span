import { useSelector, useDispatch } from "react-redux"
import { MdOutlineCancel } from "react-icons/md";
import { useEffect } from "react";
import { clearSelected } from "../store";

function SelectedMovie () {
    const dispatch = useDispatch()
    const movieinfo = useSelector(state => state.form.selectedMovieInfo)
    const isMovieSelected= useSelector(state => state.form.selectedMovie)

    const handleRemoveSelected = () => {
        dispatch(clearSelected())
    }
    
    const obj = isMovieSelected ? 
    <div className="flex text-white items-center bg-gray-700 border-solid border-2 rounded-xl border-orange-500 md:w-fill md:p-2 px-5">
            <img style={{width:"55px", height:"85px", borderRadius: "10px"}} src={movieinfo.image}/>
            <p className="px-2 text-lg font-bold">{movieinfo.title}</p>
            <p className="pr-2">({movieinfo.year})</p>
            <div onClick={handleRemoveSelected} className="px-4 hover:text-red-500 text-lg">
                <MdOutlineCancel/>
            </div>
            
    </div>
    : <div/>

    return(
        <div>
            {obj}
        </div>
    )
}   
export default SelectedMovie