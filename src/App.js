import Searchbar from "./components/Searchbar";
import SearchForm from "./components/SearchFrom";
import Title from "./components/Title";
import SearchResults from "./components/SearchResults";
import { UseSelector, useSelector } from "react-redux";

function App () {
    const isSelected = useSelector(state => state.form.selectedMovie)

    return (
        <div className="bg-sky-950 h-screen">
            <div className="flex flex-col justify-center bg-sky-950 p-10">
                <Title/>
                <Searchbar/>
                <SearchForm/>
                {isSelected && <SearchResults/>}
            </div>
        </div>
    )
}

export default App;