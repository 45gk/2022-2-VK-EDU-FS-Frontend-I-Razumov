import React from 'react';
import './Translate.scss';


export default function Translate(props) {
    return (
        <div className={`translate`}>
            <span className={'translate-text'}>{props.orig} {'->'} {props.transl}</span>
            <span className={'translate-lang'}>{props.origLang}{'->'}{props.translLang}</span>

               
        </div>
    );
}



