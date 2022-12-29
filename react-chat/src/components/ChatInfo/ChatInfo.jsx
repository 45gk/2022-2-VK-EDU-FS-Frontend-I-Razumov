import React from 'react';
import './ChatInfo.scss';
import ChatImage from "../ChatImage/ChatImage";
import ChatInfoMeta from "../ChatInfoMeta/ChatInfoMeta"


export default function ChatInfo(props) {
    return (
        <div className="chat-info">
            <ChatImage className={'chat-image'} source={props.imageSource}/>
            <ChatInfoMeta className="chat-info-meta"
                          chatName={props.chatName}
                          lastActivity={props.lastActivity}
                          isGroup={props.isGroup}
                          countMembers={props.countMembers}/>
        </div>
    );
}
