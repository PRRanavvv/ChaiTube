import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  return (
    <div
      className={`fixed top-20 left-0 bg-opacity-95 bg-cyan-200 p-4 shadow-2xl rounded-xl w-44 transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } z-50`}
    >
      <h1 className='font-semibold font-mono'><Link to="/">Home</Link></h1>
      <h1 className='font-semibold font-mono'>Shorts</h1>
      <h1 className='font-semibold font-mono'>Videos</h1>
      <h1 className='font-semibold font-mono'>LIVE</h1>
      <h1 className='font-semibold font-mono'>Watch Later</h1>
      <ul className='font-serif text-pretty'>
        <li>~ Podcasts</li>
         <li>~ Playlists</li>
        <li>~ Trending</li>
      </ul>
      <h1 className='font-semibold font-mono py-2'>Subscriptions</h1>
      <ul className='font-serif text-pretty'>
        <li>~ Music</li>
        <li>~ Gaming</li>
        <li>~ Sports</li>
        <li>~ Movies</li>
      </ul>
      <h1 className='font-semibold font-mono py-1'>Settings 🤖</h1>
      <h1 className='font-semibold font-mono py-1'>Report History 🫨</h1>
      <h1 className='font-semibold font-mono py-1'>Help 👽</h1>
      <h1 className='font-semibold font-mono py-1'>Send Feedback 😞</h1>
    </div>
  );
};

export default Sidebar;
