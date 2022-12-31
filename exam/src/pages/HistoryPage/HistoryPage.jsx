import React, {useEffect, useState} from 'react';
import './HistoryPage.scss';
import {Button} from '../../components/Button/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import History from '../../components/History/History';
import {getTrans} from "./index";


export default function HistoryPage(props) {
    const [translates, setTrans] = useState([]);
    const [reload, setReload] = useState('');
    function loadTranslates() {
        let savedTrans = getTrans()
        console.log(savedTrans);
        
        if (savedTrans != false) {
            setTrans(savedTrans);
        }
        
    }
    
    useEffect(loadTranslates, [])
    //console.log(localStorage);
    //console.log(translates);
    return (
        <div className='history'>
            <div className='app-name'>
                VK Translate
            </div>
            
            <div className='history-h'>
                История переводов

            </div>
            
            <div className={'history-container'}>



            



           
                <div>
                    <Button className='back'  goTo='/' >
                        <ArrowBackIcon/>
                    </Button>
                </div>
            


            <History translates={translates}/>

            
            </div>
            
            
            <div className='clear-button' onClick={() =>  {localStorage.clear();loadTranslates();setReload('История удалена, пожалуйста, перезагрузите страницу')}}>
                 Очистить историю
            </div>

            <div className='reload-state'> 
                {reload}
            </div>
            
            
        </div>
        
        
    );
}

