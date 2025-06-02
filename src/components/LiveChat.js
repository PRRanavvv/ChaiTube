import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomTexts } from '../utils/helper';

const LiveChat = () => {
  const [userMessage, setUserMessage] = useState("");
  const dispatch = useDispatch();
  const ChatMessages = useSelector(store => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      console.log("API Polling");

      dispatch(addMessage({
        name: generateRandomName(),
        message: makeRandomTexts(17) + " 🫨🚀",
      }));
    }, 1000);

    return () => clearInterval(i);
  }, [dispatch]);

  const handleSendMessage = (e) => {
    if (e.key === 'Enter' && userMessage.trim()) {
      dispatch(addMessage({
        name: "pranavVv", // Customize the sender name
        message: userMessage,
      }));
      setUserMessage(""); // Clear the input field after sending
    }
  };

  return (
    <>
      <div className="w-full h-[600px] ml-3 p-2 border border-gray-300 bg-slate-400 rounded-xl overflow-auto flex flex-col-reverse">
        {ChatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>

      <div className="px-4 py-2 bg-gray-100 border-t border-gray-300 flex items-center">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyDown={handleSendMessage}
        />
      </div>
    </>
  );
};

export default LiveChat;
