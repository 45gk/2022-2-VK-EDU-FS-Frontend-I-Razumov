import React from 'react';
import './Translate.scss';


export default function Translate(props) {
    return (
        <div className={`translate`}>
            <span className={'translate-orig'}>{props.orig}</span>
            <span className={'translate-orig-lang'}>{props.origLang}</span>
            <span className={'translate-transl'}>{props.transl}</span>
               
        </div>
    );
}



