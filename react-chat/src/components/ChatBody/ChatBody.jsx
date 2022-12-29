import React, {useEffect, useRef} from 'react'
import './ChatBody.scss';
import Message from "../Message/Message";

export default function ChatBody({messages}) {
    const messageBlocks = messages.map((message) => {
        return (
            <Message text={message.text}
                     time={message.time}
                     ifFromUser={true}
                     status={message.status}/>
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