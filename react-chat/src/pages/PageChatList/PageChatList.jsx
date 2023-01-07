import React from 'react';
import './PageChatList.scss';

import Jennifer from '../../Jennifer.jpg';
import Yennifer from '../../Yennifer.jpg';
import Mike from '../../Mike.jpg';
import logo from '../../chatlogo.jpg';

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
                

                <Link className="chat" to="/chatGen">
                <ChatListItem chatName={'Общий чат'} goTo='/chat3'
                              lastMessageTime={'10:51'}
                              lastMessageContent={'Общий чат'}
                              ifFromUser={true}
                              lastMessageStatus={'read'}
                              imageSource={logo}
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

