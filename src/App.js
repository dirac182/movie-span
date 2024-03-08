import Searchbar from "./components/Searchbar";
import SearchForm from "./components/SearchFrom";
import Title from "./components/Title";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
import { UseSelector, useSelector } from "react-redux";

function App () {
    const isSelected = useSelector(state => state.form.selectedMovie)

    return (
        <div className="flex flex-col bg-sky-950 min-h-screen">
            <div className="flex-grow flex-col justify-center bg-sky-950 md:p-10 ">
                <Title/>
                <Searchbar/>
                <SearchForm/>
                {isSelected && <SearchResults/>}
                
            </div>
            <div className="flex justify-end">
                <Footer/>
            </div>
        </div>
    )
}

export default App;