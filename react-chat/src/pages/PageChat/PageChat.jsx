import React, {useEffect, useState} from 'react';
import './PageChat.scss';

import Jennifer from '../../Jennifer.jpg';

import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import ChatInfo from '../../components/ChatInfo/ChatInfo'
import ChatForm from '../../components/ChatForm/ChatForm'
import ChatBody from '../../components/ChatBody/ChatBody'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from "@mui/icons-material/MoreVert";

import {getMessagesFromLocalStorage, saveMessageToLocalStorage} from "./index";


export default function PageChat(props) {
    const [messages, setMessages] = useState([])

    function sendMessage(message) {
        const newMessages = Object.assign([], messages);
        newMessages.push(message);
        setMessages(newMessages);
        saveMessageToLocalStorage(message)
    }

    function loadMessages() {
        let savedMessages = getMessagesFromLocalStorage()
        if (savedMessages) {
            setMessages(savedMessages);
        }
    }

    useEffect(loadMessages, [])

    return (
        <div className={'chat-container'}>
            <Header>
                <Button className={'back-button'} onClick={() => props.onClick('chat-list')}>
                    <ArrowBackIcon/>
                </Button>
                <ChatInfo imageSource={Jennifer}
                          chatName={'Дженнифер'}
                          lastActivity={'была 2 часа назад'}
                          isGroup={false}
                          countMembers={null}/>
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
                <ChatForm sendMessage={sendMessage}/>
            </div>
        </div>
    );
}

