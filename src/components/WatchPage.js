import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));


    const dispatch = useDispatch();
    useEffect (() => {
        dispatch(closeMenu());
    }, []);

  return (
    <div className='flex flex-col w-full'>
    <div className='px-1 py-16 m-4 flex'>
      <div>
        <iframe className='rounded-xl'
         width="1500" 
         height="855" 
         src = {"https://www.youtube.com/embed/" + searchParams.get("v")} 
         title="YouTube video player" 
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerpolicy="strict-origin-when-cross-origin" 
         allowfullscreen>
        </iframe>
      </div>
      <div className='w-full'>
        <LiveChat />
      </div>
        
    </div>
    <CommentsContainer />
    </div>
  );
};

export default WatchPage