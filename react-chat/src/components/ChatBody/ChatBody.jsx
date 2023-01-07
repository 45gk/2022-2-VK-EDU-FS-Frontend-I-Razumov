import React, {useEffect, useRef} from 'react'
import './ChatBody.scss';
import Message from "../Message/Message";

export default function ChatBody({messages}) {
    function getTimeFromISOString(timestamp) {
        return new Date(timestamp).toLocaleTimeString('ru',
                       { timeStyle: 'short', hour12: false, timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone });
      }
    
    const messageBlocks = messages.map((message) => {
        let time =getTimeFromISOString(message.timestamp);
        return (
            <Message text={message.text}
                     time={time}
                     ifFromUser={true}
                     status={message.status}
                     author= {message.author}
                     />
        )
    });

    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.scrollIntoView();
    });

    return (
        <section className={'chat-body'}>
            {messageBlocks}
            <div ref={divRef}/>
        </section>
    )
}