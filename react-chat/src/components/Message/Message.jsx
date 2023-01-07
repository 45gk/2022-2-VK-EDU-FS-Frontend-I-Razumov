import React from 'react';
import './Message.scss';
import {ifMessageFromUser} from "./index";


export default function Message(props) {
    let className = ''
    if (props.author === '45gk'){
        className = 'message-right';
    }
    else{
        className = 'message-left';
    }
    
    return (
        <div className={`message ${className}`}>
            <span className={'message-author'}>{props.author}</span>
            <span className={'message-text'}>{props.text}</span>
            
            <div className={'message-meta'}>
                <span className={'message-time'}>{props.time}</span>
                {ifMessageFromUser(props.ifFromUser, 'message-status', 'message-icon', props.status)}
            </div>
        </div>
    );
}
