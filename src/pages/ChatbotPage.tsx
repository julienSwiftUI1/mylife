import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Bonjour ! Je suis votre assistant d'orientation. Comment puis-je vous aider ?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([
      ...messages,
      { id: Date.now(), text: input, isBot: false }
    ]);
    setInput('');
  };

  return (
    <div className="max-w-md mx-auto p-4 h-[calc(100vh-8rem)]">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-blue-500 text-white'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Posez votre question..."
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatbotPage;