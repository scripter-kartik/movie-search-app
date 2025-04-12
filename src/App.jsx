import React, { useState } from "react"; 
import MovieSearch from "./components/MovieCards";
import { MdDarkMode } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
function App() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col relative items-center justify-center transition-all duration-500 ${darkMode ? "bg-[#1A1A1D] text-white" : "bg-white text-black"}`}>
      <div className="w-full max-w-7xl px-6 py-10">
        <header className="flex  gap-50 ml-90 items-center py-4">
          <h1 className = {`text-5xl ${darkMode? 'text-white':'text-black'} font-extrabold text-center cursor-pointer`} >Movie Search</h1>
          <button
            onClick={toggleDarkMode}
            className={` cursor-pointer p-5 rounded-full hover:scale-120 hover:rotate-40  font-[Poppins] font-semibold transition-all duration-500 transition-ease-in-out ${darkMode ? 'bg-white text-black': 'bg-black text-white'} `  }
          >
            {darkMode ? <MdDarkMode /> : <MdDarkMode />   }
          </button>
        </header>

        <div className="relative w-full max-w-3xl mx-auto mt-10">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for your favorite movie..."
            className={`w-full py-4 px-6 text-2xl rounded-full font-[Poppins] border-2 focus:outline-none focus:ring-2 ${darkMode? 'focus:ring-white border-white text-white ' : 'focus:ring-black border-black text-black'} shadow-xl`}
          />
          <div className="absolute top-0 right-0 mr-4 mt-4">
            <button className={`text-white py-3 px-6 cursor-pointer rounded-full hover:scale-105 ${darkMode? 'bg-white text-black': 'bg-black '}`}>
            {darkMode ? <FaSearch color="black" /> : <FaSearch color="white" />}
            </button>
          </div>
        </div>

        <MovieSearch search={search} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
