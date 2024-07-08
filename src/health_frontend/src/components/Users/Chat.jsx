import React from 'react';

const ChatBubble = ({ message, isUser }) => {
  const bubbleClasses = isUser
    ? 'bg-primary text-white self-end'
    : 'bg-gray-200 text-gray-800';

  const containerClasses = isUser
    ? 'flex justify-end'
    : 'flex justify-start';

  return (
    <div className={`${containerClasses} my-2  `}>
      <div className={`max-w-xs rounded-lg py-2 px-4 ${bubbleClasses}`}>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
