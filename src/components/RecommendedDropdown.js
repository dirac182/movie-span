

function RecommendedDropdown({title, id, image, year}) {
    const releaseYear = year ? `(${year})`: ""


    return(
        <div className="flex text-white items-center bg-gray-700 border-solid border-2 rounded-xl border-orange-500 hover:bg-gray-800 cursor-pointer">
            <img style={{width:"55px", height:"85px", borderRadius: "10px"}} src={image}/>
            <p className="px-2 text-lg font-bold">title</p>
            <p className="pr-2">(year)</p>
        </div>
    )
}

export default RecommendedDropdown;