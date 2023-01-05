import React from 'react';
import './PageProfile.scss';


import Jennifer from '../../Jennifer.jpg';
import Yennifer from '../../Yennifer.jpg';
import Mike from '../../Mike.jpg';

import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Icon } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DoneIcon from "@mui/icons-material/Done";
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import { Link } from 'react-router-dom';


export default function PageChatList(props) {
    
    if (props.userID === "1"){
        var route= Jennifer;
    }
    else if (props.userID === "2"){
        var route= Yennifer;
    }
    else{
        var route= Mike;
    }
    
    let users = localStorage.getItem('users');
    if (users == null || users === '') {
        localStorage.setItem('users', JSON.stringify({1:'Дженнифер',2:'Йеннифер',3:'Майк'}));
    }
    
    users = JSON.parse(users);
    
    return (
        <div className={'chat-prof-container'}>
            <Header>
                <Link className="chat" to={'/chat' + props.userID}>
                    <Button className={'back-button'} onClick={() => {
                    }}>
                        <span className="bar"/>
                        <span className="bar"/>
                        <span className="bar"/>
                        <ArrowBackIcon/>
                    </Button>
                </Link>
                <div className={'page-name'}>Профиль</div>
                <Button className={'search-button'} onClick={() => {
                }}>
                    <DoneIcon/>
                </Button>
            </Header>
            <div className={'chat-prof-body'}>
                <div className='pic'>
                    <div className='edit-picture'>
                        <img
                        src={route}
                        className="profile-avatar"
                        alt="Not found"
                        />
                        <div className='avatar-button'>
                        <LocalSeeIcon className='edit-avatar-icon'/>
                        </div>
                    </div>
                </div>

                <div className='name'>
                    <div className='profile-input-header'>
                        Full name
                    </div>
                    <div className='profile-input-container'>
                        <input
                            value={users[props.userID]}
                        />
                    </div>
                </div>

                <div className='username'>
                    <div className='profile-input-header'>
                        Username
                    </div>
                    <div className='profile-input-container'>
                        <input
                            value={'@'+users[props.userID]}
                        />
                    </div>
                </div>

                <div className='bio'>
                    <div className='profile-input-header'>
                        Bio
                    </div>
                    <div className='profile-input-container'>
                        <input
                            value={users[props.userID]+"is the best person in the world"}
                        />
                    </div>
                </div>
            </div>
            <div className={'fixed-button'}>
                <Button className={'creation-button'} onClick={() => {
                }}>
                    <CreateIcon/>
                </Button>
            </div>
        </div>
    );
}

