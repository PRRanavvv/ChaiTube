import React from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';

const VideoCard = ({ info }) => {
    if (!info || !info.snippet) {
        return null; // or a fallback UI
    }

    const { snippet } = info;
    const { channelTitle, thumbnails, title, publishedAt } = snippet;

    // Format the publishedAt timestamp
    const date = parseISO(publishedAt);
    const relativeTime = formatDistanceToNow(date, { addSuffix: true });

    return (
        <div className='p-2 m-2 w-64 h-auto shadow-xl transform transition-transform duration-300 hover:scale-110'>
            <div className="relative w-full h-36 overflow-hidden rounded-xl">
                <img 
                    className="w-full h-full object-cover"
                    alt="thumbnail"
                    src={thumbnails.medium.url}
                />
            </div>
            <div className='mt-2'>
                <p className='font-semibold font-mono py-1 truncate'>{title}</p>
                <p className='font-medium font-serif'>{channelTitle} •  {relativeTime}</p>
            </div>
        </div>
    );
};

export default VideoCard;
