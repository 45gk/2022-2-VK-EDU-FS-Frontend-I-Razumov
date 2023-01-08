import React from 'react';
import './PageProfile.scss';


import Jennifer from '../../Jennifer.jpg';
import Yennifer from '../../Yennifer.jpg';
import Mike from '../../Mike.jpg';

import Button from "../../components/Button/Button";
import { ChatHead } from '../../components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Icon } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DoneIcon from "@mui/icons-material/Done";
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import { Link } from 'react-router-dom';


export default function PageChatList() {
    
 
    
    return (
        <div className={'chat-prof-container'}>
            <ChatHead>
                <Link to='/chat1'>
                    <Button className={'back-button'} onClick={() => {
                    }}>
                        
                        <ArrowBackIcon/>
                    </Button>
                    </Link>
                
                <div className={'page-name'}>Профиль</div>
                <Button className={'search-button'} onClick={() => {
                }}>
                    <DoneIcon/>
                </Button>
            </ChatHead>
            <div className={'chat-prof-body'}>
                <div className='pic'>
                    <div className='edit-picture'>
                        <img
                        src={Jennifer}
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
                            value={'Дженнифер'}
                        />
                    </div>
                </div>

                <div className='username'>
                    <div className='profile-input-header'>
                        Username
                    </div>
                    <div className='profile-input-container'>
                        <input
                            value={'@Дженнифер'}
                        />
                    </div>
                </div>

                <div className='bio'>
                    <div className='profile-input-header'>
                        Bio
                    </div>
                    <div className='profile-input-container'>
                        <input
                            value={"Дженнифер is the best person in the world"}
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

