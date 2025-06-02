import React, { useRef } from 'react';
import Button from './Button';

const ButtonList = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -100, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 100, behavior: 'smooth' });
  };

  const buttonNames = [
    'AiMl', 'Travel', 'Adventure', 'Pilot', 'Camping', 'Snowing',
    'Business', 'Motivation', 'SaaS', 'dream', 'game_dev', 'editing',
    'market', 'trade'
  ];

  return (
    <div className="relative pt-20">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <button
          className="bg-gray-400 p-2 rounded-full shadow hover:bg-gray-500"
          onClick={scrollLeft}
        >
          ◀
        </button>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto py-2 space-x-2 scrollbar-hide"
      >
        {buttonNames.map((name, index) => (
          <Button key={index} name={name} />
        ))}
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button
          className="bg-gray-400 p-2 rounded-full shadow hover:bg-gray-500"
          onClick={scrollRight}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default ButtonList;
