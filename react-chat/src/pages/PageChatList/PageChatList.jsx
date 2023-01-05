import React from 'react';
import './PageChatList.scss';

import Jennifer from '../../Jennifer.jpg';
import Yennifer from '../../Yennifer.jpg';
import Mike from '../../Mike.jpg';

import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import ChatListItem from "../../components/ChatListItem/ChatListItem";

import CreateIcon from '@mui/icons-material/Create';
import SearchIcon from "@mui/icons-material/Search";

import { Link } from 'react-router-dom';


export default function PageChatList(props) {
    
    let users = localStorage.getItem('users');
    if (users == null || users === '') {
        localStorage.setItem('users', JSON.stringify({1:'Дженнифер',2:'Йеннифер',3:'Майк'}));
    }
    
    users = JSON.parse(users);
    console.log(users["1"]);

    return (
        <div className={'chat-list-container'}>
            <Header>
                <Button className={'menu-button'} onClick={() => {
                }}>
                    <span className="bar"/>
                    <span className="bar"/>
                    <span className="bar"/>
                </Button>
                <div className={'page-name'}>Messenger</div>
                <Button className={'search-button'} onClick={() => {
                }}>
                    <SearchIcon/>
                </Button>
            </Header>
            <div className={'chat-list-body'}>
                <Link className="chat" to="/chat1">
                <ChatListItem chatName={users["1"]} goTo='/chat1'
                              lastMessageTime={'10:52'}
                              lastMessageContent={'Дженнифер  теперь использует этот супер-мессенджер!'}
                              ifFromUser={true}
                              lastMessageStatus={'read'}
                              imageSource={Jennifer}
                               />

                </Link>
                <Link className="chat" to="/chat2">
                <ChatListItem chatName={users["2"]} goTo='/chat2'
                              lastMessageTime={'10:52'}
                              lastMessageContent={'Йеннифер  теперь использует этот супер-мессенджер!'}
                              ifFromUser={true}
                              lastMessageStatus={'read'}
                              imageSource={Yennifer}
                               />

                </Link>
                <Link className="chat" to="/chat3">
                <ChatListItem chatName={users["3"]} goTo='/chat3'
                              lastMessageTime={'10:52'}
                              lastMessageContent={'Майк  теперь использует этот супер-мессенджер!'}
                              ifFromUser={true}
                              lastMessageStatus={'read'}
                              imageSource={Mike}
                               />

                </Link>
            </div>
            <div className={'fixed-button'}>
                <Button className={'creation-button'} onClick={() => {
                }}>
                    <CreateIcon/>
                </Button>
            </div>
        </div>
    );
}

