import React from 'react';
import './PageChatList.scss';

import Jennifer from '../../Jennifer.jpg';

import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import ChatListItem from "../../components/ChatListItem/ChatListItem";

import CreateIcon from '@mui/icons-material/Create';
import SearchIcon from "@mui/icons-material/Search";


export default function PageChatList(props) {
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
                <ChatListItem chatName={'Дженнифер'}
                              lastMessageTime={'10:52'}
                              lastMessageContent={'Дженнифер  теперь использует этот супер-мессенджер!'}
                              ifFromUser={true}
                              lastMessageStatus={'read'}
                              imageSource={Jennifer}
                              onClick={() => props.onClick('chat')}/>
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

