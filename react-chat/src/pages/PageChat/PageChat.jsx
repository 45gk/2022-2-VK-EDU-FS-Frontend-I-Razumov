import React, {useEffect, useState} from 'react';
import './PageChat.scss';

import Jennifer from '../../Jennifer.jpg';
import Yennifer from '../../Yennifer.jpg';
import Mike from '../../Mike.jpg';

import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import ChatInfo from '../../components/ChatInfo/ChatInfo'
import ChatForm from '../../components/ChatForm/ChatForm'
import ChatBody from '../../components/ChatBody/ChatBody'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, Route } from 'react-router-dom';

import {getMessagesFromLocalStorage, saveMessageToLocalStorage} from "./index";


export default function PageChat(props) {
    const [messages, setMessages] = useState([])

    if (props.userID === "1"){
        var route= Jennifer;
    }
    else if (props.userID === "2"){
        var route= Yennifer;
    }
    else{
        var route= Mike;
    }
    
    let users = localStorage.getItem('users');
    if (users == null || users === '') {
        localStorage.setItem('users', JSON.stringify({1:'Дженнифер',2:'Йеннифер',3:'Майк'}));
    }
    
    users = JSON.parse(users);


    function sendMessage(message) {
        const newMessages = Object.assign([], messages);
        newMessages.push(message);
        setMessages(newMessages);
        saveMessageToLocalStorage(message)
    }

    function loadMessages() {
        let savedMessages = getMessagesFromLocalStorage(props.userID)
        console.log(savedMessages);
        console.log('sadsadsaasss');
        if (savedMessages) {
            setMessages(savedMessages);
        }
    }
   

    useEffect(loadMessages, [])

    return (
        <div className={'chat-container'}>
            <Header>
                <Link className="chat" to="/">
                <Button className={'back-button'}  >
                    <ArrowBackIcon/>
                </Button>
                </Link>
                <Link className="chat" to={'/prof'+props.userID} userID={props.userID}>
                    <ChatInfo imageSource={route}
                            chatName={users[props.userID]}
                            lastActivity={'была 2 часа назад'}
                            isGroup={false}
                            countMembers={null}/>
                </Link>
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
                <ChatForm sendMessage={sendMessage} userID={props.userID}/>
            </div>
        </div>
    );
}

