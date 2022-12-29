import React from 'react';
import './ChatImage.scss';


export default function ChatImage(props) {
    return (
        <div className={`round-image ${props.className}`}>
            <img className="round-image-inner" src={props.source} alt="Chat"/>
        </div>
    );
}
