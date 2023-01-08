import React from 'react';
import  './Button1.scss';

export function Button1(props) {
    
    return(
        <div className='button'>
            {props.children}
        </div>
    );
}
