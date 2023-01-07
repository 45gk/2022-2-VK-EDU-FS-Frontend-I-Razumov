import React, {useState, useEffect, useCallback, useRef} from 'react';
import {Link} from 'react-router-dom'
import './PageChat.scss';

import logo from '../../chatlogo.jpg';

import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import ChatInfo from '../../components/ChatInfo/ChatInfo'
import ChatForm from '../../components/ChatForm/ChatForm'
import ChatBody from '../../components/ChatBody/ChatBody'
import FormGen from '../../components/FormGen/FormGen'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function PageChatGeneral () {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");

    function getMessages() {
        fetch("https://tt-front.vercel.app/messages")
            .then(response => response.json())
            .then(data => setMessages(data))
    }

    async function sendMessage(message) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(message)
        }
        const response = await fetch("https://tt-front.vercel.app/message", options);
        const data = await response.json()
        return data;
    }

    useEffect(() => {
        getMessages();
        const timer_id = setInterval(getMessages, 1000);

        return () => {clearInterval(timer_id)} 
    }, []);

    
    async function handleSubmit(event) {
        event.preventDefault();
        if (text === "")
            return;
        const message = {
            text: text,
            author: "45gk"
        };
        const created_message = await sendMessage(message);
        if (created_message.timestamp > messages[messages.length-1].timestamp) { 
            setMessages(messages.concat(created_message));                       
        }
        setText("");
    }

    function handleChange(event) {
        setText(event.target.value)
    }
    console.log(messages)

  return (
   
        <div className={'chat-container'}>
        <Header>
            <Link className="chat" to="/">
            <Button className={'back-button'}  >
                <ArrowBackIcon/>
            </Button>
            </Link>
            
                <ChatInfo imageSource={logo}
                        chatName={'Общий чат'}
                        lastActivity={'60 участников'}
                        isGroup={false}
                        countMembers={60}/>
            
            <div>
                <Button className={'search-button'} onClick={() => {
                }}>
                    <SearchIcon/>
                </Button>
                <Button className={'more-button'} onClick={() => {
                }}>
                    <MoreVertIcon/>
                </Button>
            </div>
        </Header>
        <ChatBody messages={messages}/>
        <div className={'chat-footer'}>
        <FormGen
                onSubmit={handleSubmit}
                onChange={handleChange}
                value={text}
                name="message_text"
                placeholder="Напишите сообщение..."
            />
        </div>
        </div>
  );
  }

