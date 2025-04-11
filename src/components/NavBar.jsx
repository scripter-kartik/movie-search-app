import React from 'react';
import glass from '../images/glass.png';

function NavBar({ search, setSearch, setMovie }) {
    const API_KEY = 'ec21ea39';

    const handleSearchClick = async () => {
        if (!search.trim()) return; // Prevent search if the input is empty

        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${search}`);
        const data = await response.json();

        if (data.Response === 'True') {
            setMovie(data); // Set movie data if the movie is found
        } else {
            setMovie(null); // Reset movie data if no movie is found
        }
    };

    return (
        <div>
            <div className="flex items-center p-5 bg-gray-800 relative">
                <h1 className="text-6xl text-white">M</h1>
                <img className="w-10 h-10" src={glass} alt="searchImage" />
                <h1 className="text-6xl text-white">vie Search</h1>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    className="border-black text-3xl text-center p-5 w-1/2 h-10 bg-white rounded-4xl ml-4 outline-none"
                />
                <button
                    onClick={handleSearchClick} // Trigger search when clicked
                    className="absolute left-72 rounded-e-3xl w-20 h-10 bg-black border-white border-1 text-white"
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export default NavBar;
