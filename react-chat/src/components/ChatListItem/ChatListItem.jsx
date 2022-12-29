import React from 'react';
import './ChatListItem.scss';

import ChatImage from "../ChatImage/ChatImage";
import ChatListItemTitle from "../ChatListItemTitle/ChatListItemTitle";
import ChatListItemSubtitle from "../ChatListItemSubtitle/ChatListItemSubtitle";


export default function ChatListItem(props) {
    return (
        <div className={'chat-list-item ripple wave'} onClick={props.onClick}>
            <ChatImage className={'chat-list-image'} source={props.imageSource}/>
            <div className={'chat-list-item-information'}>
                <ChatListItemTitle chatName={props.chatName} lastMessageTime={props.lastMessageTime}/>
                <ChatListItemSubtitle
                    lastMessageContent={props.lastMessageContent}
                    ifFromUser={props.ifFromUser}
                    lastMessageStatus={props.lastMessageStatus}/>
            </div>
        </div>
    );
}
