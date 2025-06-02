import React, { useEffect, useState } from 'react';
import { YouTube_vids_api } from '../utils/contants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom'; 

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YouTube_vids_api);
      if (!data.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await data.json();
      
      setVideos(json.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  return (
    <div className='flex flex-wrap'>
      {videos.map((video) => (
        <Link to = {"/watch?v=" + video.id }><VideoCard key={video.id} info={video} /></Link>
      ))}
    </div>
  );
}

export default VideoContainer;
