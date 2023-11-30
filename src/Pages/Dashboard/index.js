import React, { useState, useEffect, useRef } from 'react';



const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messageContainerRef = useRef(null);

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim() !== '') {
      const newMessages = [...messages, { text: newMessage, sender: 'user' }];
      setMessages(newMessages);
      setNewMessage('');
      // For a real chat, you would send the message to a server and get the response.
      // For simplicity, we are just adding the user's message to the state.
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the message container whenever new messages are added
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="message-container" ref={messageContainerRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form className="input-container" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBox;
