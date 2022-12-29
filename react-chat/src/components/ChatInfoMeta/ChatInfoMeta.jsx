import React from 'react';
import './ChatInfoMeta.scss';


function getIfGroup(flag, count_members, last_activity) {
    if (flag) {
        return <span className="chat-count-members">{count_members}</span>;
    }

    return <span className="chat-last-activity">{last_activity}</span>;
}

export default function ChatInfoMeta(props) {
    return (
        <div className="chat-info-meta">
            <span className="chat-name">{props.chatName}</span>
            {getIfGroup(props.isGroup, props.countMembers, props.lastActivity)}
        </div>
    );
}
