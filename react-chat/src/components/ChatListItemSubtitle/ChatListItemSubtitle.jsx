import React from 'react';
import './ChatListItemSubtitle.scss';
import {ifMessageFromUser} from "../Message/index";


export default function ChatListItemSubtitle(props) {
    return (
        <div className={'chat-list-item-subtitle'}>
            <span className={'last-message-content'}>{props.lastMessageContent}</span>
            {ifMessageFromUser(props.ifFromUser,
                'last-message-status',
                'last-message-icon',
                props.lastMessageStatus)}
        </div>
    );
}
