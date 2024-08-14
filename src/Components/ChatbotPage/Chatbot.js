import React, { useEffect, useRef, useState } from 'react'
import './Chatbot.css';
import ayzenLogo from '../../Icons/ayzen-logo.png';
import {FiArrowUpCircle, FiSun} from "react-icons/fi";
import {BsLightningCharge} from "react-icons/bs";
import {IoSend, IoWarningOutline} from "react-icons/io5";
import {HiArrowUpRight} from "react-icons/hi2";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../context/authContext";
import {doSignOut} from "../../Firebase/auth";
import { FaHome } from "react-icons/fa";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm AYZEN support assistant. How can I help you today?",
    },
  ])
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true);
  const [isLoading , setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [showApplicationUI, setShowApplicationUI] = useState(true);
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const sendMessage = async () => {
    if (!message.trim()) return;
    setIsLoading(true);
    setMessage('');
    setMessages((messages) => [
      ...messages,
      { role: 'user', content: message },
      { role: 'assistant', content: '' },
    ]);

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([...messages, { role: 'user', content: message }]),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let content = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        content += decoder.decode(value, { stream: true });
      }
      const responseJson = JSON.parse(content);
      const assistantContent = responseJson.content || ''; // Adjust based on actual response structure

      // Update state with just the content
      setMessages((messages) => {
        let lastMessage = messages[messages.length - 1];
        let otherMessages = messages.slice(0, messages.length - 1);
        return [
          ...otherMessages,
          { ...lastMessage, content: assistantContent.trim() },
        ];
      });

    } catch (error) {
      console.error('Error:', error);
      setMessages((messages) => [
        ...messages,
        { role: 'assistant', content: "I'm sorry, but I encountered an error. Please try again later." },
      ]);
    }
    setIsLoading(false);
  };


  const handleKeyPress = (event)=>{
    if(event.key === 'Enter' && !event.shifitKey){
      event.preventDefault()
      sendMessage()
    }
  }
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
        <div className="loader-container">
          <img className="loader" src={ayzenLogo} alt={"ayzen-loader"} />
        </div>
    );
  }

  return (
      <div className="main-chat-div w-full h-screen flex flex-col justify-between items-center ">
        <div className="sidebar w-64 text-white h-full fixed top-0 left-0 flex flex-col">
          <div className={"chatbot-text-div flex flex-row m-10"}>
            <img className={"nav-ayzen-logo h-9 w-9"} src={ayzenLogo} alt={"ayzen-logo"}/>
            <h1 className={"chatbot-text ml-3"}>AYZEN</h1>
          </div>
          <nav className="flex-grow">

          </nav>
          <div className="p-4">
          </div>
        </div>


        <div className={"chatbot-home flex flex-row items-center justify-between w-full h-screen"}>
          <div className={"chatbot-text-div mx-auto"}>
            <h1 className={"chatbot-text text-center"}>AYZEN</h1>
          </div>
          <div className={"flex flex-row p-7"}>
            {
              userLoggedIn?
                  <>
                    <button className={"logout-button flex flex-row items-center justify-end mr-5"} onClick={()=>{doSignOut().then(()=>{ navigate('/login')})}}>
                      Logout
                      <span className="arrow"><HiArrowUpRight/></span>
                    </button>
                    <button className={"logout-button flex flex-row items-center justify-end mr-5"} onClick={()=>{doSignOut().then(()=>{ navigate('/')})}}>
                      Home
                      <span className="arrow"><HiArrowUpRight/></span>
                    </button>
                  </>
                  :
                  <>
                    <Link className={"login-navigation"} to={'/login'}>Login</Link>
                    <Link className={"register-navigation"} to={'/register'}>Register</Link>
                  </>
            }

          </div>
        </div>
        <div className="chat-div-container w-full h-[700px] p-4 overflow-y-auto flex flex-col space-y-4">
          <div className="messages-div flex-1 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`flex ${
                        message.role === 'assistant' ? 'justify-start' : 'justify-end'
                    }`}
                >
                  <div
                      className={`ayzen-message-text rounded-3xl p-3 text-gray-200 flex flex-row ${
                          message.role === 'assistant'
                              ? ''
                              : 'bg-[rgba(70,70,70,0.55)]'
                      }`}
                  >
                    {message.role === 'assistant' && (
                        <img
                            src={ayzenLogo}
                            alt="logo"
                            className="chatbot-messager w-8 h-8 mr-5 -mt-1 bg-gray-100 rounded-2xl"
                        />
                    )}
                    <span>{message.content}</span>
                  </div>
                </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className={"bottom-0 left-0 right-0"}>
            <div className="flex space-x-2">
              <input
                  type="text"
                  placeholder="Message ayzen"
                  className="chat-input w-full p-2 border rounded-lg"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
              />
              <button
                  className={`send-button right-2  top-1/2 transform -translate-y-1/2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={sendMessage}
                  disabled={isLoading}
              >
                <FiArrowUpCircle size={24} color="#c7c7c7" />
                {isLoading ? '' : ''}
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}