import React, { useState } from "react"; 
import MovieSearch from "./components/MovieCards";

function App() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-all duration-500 ${darkMode ? "bg-gray-900" : "bg-gradient-to-br from-indigo-600 to-pink-500"}`}>
      <div className="w-full max-w-7xl px-6 py-10">
        <header className="flex justify-between items-center py-4">
          <h1 className="text-4xl text-white font-extrabold cursor-pointer">Movie Search</h1>
          <button
            onClick={toggleDarkMode}
            className="text-white py-2 px-6 rounded-lg bg-gradient-to-r from-yellow-500 to-red-500 transition-all duration-300 hover:scale-105"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>

        <div className="relative w-full max-w-3xl mx-auto mt-10">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for your favorite movie..."
            className="w-full py-4 px-6 text-2xl rounded-3xl focus:outline-none focus:ring-4 focus:ring-indigo-600 shadow-xl"
          />
          <div className="absolute top-0 right-0 mr-4 mt-4">
            <button className="text-white py-3 px-6 bg-gradient-to-r from-green-400 to-teal-600 rounded-full hover:scale-105">
              🔍
            </button>
          </div>
        </div>

        <MovieSearch search={search} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
