import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-2xl rounded-3xl'>
        <img
        className='h-7'
        alt = 'user'
        src = "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <span className='font-bold px-2 text-lg'>
            {name} ~
        </span>
        <span className='font-mono text-xl'>
            {message}
        </span>
    </div>
  );
};

export default ChatMessage;
