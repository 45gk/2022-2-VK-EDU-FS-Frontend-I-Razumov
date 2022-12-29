import React from 'react';
import './ChatListItemTitle.scss';


export default function ChatListItemTitle(props) {
    return (
        <div className={'chat-list-item-title'}>
            <span className={'chat-list-item-name'}>{props.chatName}</span>
            <span className={'last-message-time'}>{props.lastMessageTime}</span>
        </div>
    );
}
