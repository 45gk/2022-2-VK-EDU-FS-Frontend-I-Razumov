import React from 'react';
import './Header.scss';


export default function Header(props) {
    return (
        <nav className={"header"}>
            {props.children}
        </nav>
    );
}
