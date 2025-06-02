import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YouTube_search_api } from '../utils/contants';
import Logo from './Logo';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const getSearchSuggestions = async () => { 
      let domainName = YouTube_search_api.toString();
      const searchUrl = domainName + searchQuery;
      console.log("Api Call - " + searchUrl);
      const data = await fetch(YouTube_search_api + searchQuery);
      const json = await data.json();
      console.log(json);
      setSuggestions(json[1]);
    };

    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => { clearTimeout(timer); };
  }, [searchQuery]);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-gradient-to-r from-rose-300 to-cyan-300 bg-opacity-90 backdrop-blur-sm shadow-3xl rounded-b-3xl">
      <div className="grid grid-flow-col p-1 m-1 items-center">
        <div className="flex col-span-1">
          <img
            onClick={toggleMenuHandler}
            className="h-8 m-5 rounded-full cursor-pointer transform transition-transform duration-300 hover:rotate-90"
            alt="menu"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          />
          <a href="/">
            <Logo /> {/* Replace the hardcoded img with Logo component */}
          </a>
        </div>
        <div className="col-span-10 text-center relative">
          <div className="flex justify-center items-center">
            <input
              className="w-1/2 h-10 px-4 py-1 rounded-l-full border border-cyan-700 focus:outline-none focus:border-blue-500"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="h-10 px-4 bg-gray-100 border border-red-700 rounded-r-full hover:bg-gray-300">
              🔍
            </button>
          </div>
          {showSuggestions && (
            <div className='absolute left-1/2 transform -translate-x-1/2 w-1/2 mt-1 bg-white shadow-2xl rounded-2xl max-h-64 overflow-y-auto'>
              <ul className='text-left'>
                {suggestions.map((s) => (
                  <li key={s} className='py-3 px-2 shadow-sm hover:bg-gray-200'>
                    🔹{s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-span-1 px-4 py-4">
          <img
            className="h-9"
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;