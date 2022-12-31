import React, {useEffect, useState} from 'react';
import './TranslatePage.scss';
import {Button} from '../../components/Button/Button';
import HistoryIcon from '@mui/icons-material/History';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function TranslatePage(props) {
    const [text, setText] = useState('');
    //const [translatedText, setTranslatedText] = useState('Translation');
    //const translatedText = '';
    const [translatedText, setTranslatedText] = useState('Translation');
    const languages = props.languages;
    const langMap = props.langMap;


    useEffect(() => {
        getLanguages();
        console.log('getLanguages called')
    
      }, []) 

    const handleChange = (event) => {
        setText(event.target.value);
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        if (text !== '') {
            getTranslate();
        }
      }
    const getTranslate = () =>{
        
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            body: `[{"Text":"${text}"}]`
        };
        
        fetch('https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=ru&api-version=3.0&profanityAction=NoAction&textType=plain', options)
            .then(response => response.json())
            .then(response => {
                //translatedText: ;
                let origLang = "";
                //let origLang = response[0].detectedLanguage[0].language
                setTranslatedText(response[0].translations[0].text);
                console.log(translatedText);
                console.log(response[0].detectedLanguage[0]);
                writeToLocal(text,translatedText, origLang)
            })
            .catch(err => console.error(err));


    
    }

    const getLanguages = () =>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
                'x-rapidapi-ua': 'RapidAPI-Playground'
            }
        };
        
        fetch('https://microsoft-translator-text.p.rapidapi.com/languages?api-version=3.0', options)
            .then(response => response.json())
            .then(response => {
                let langs = [];
                let langsMap = new Map();
                Object.keys(response.translation).forEach(function(key, index) {
                    langs.push({key, ...(response.translation[key])})
                    langsMap.set(key, response.translation[key].name)
                });
                console.log(langs);
            })

            .catch(err => console.error(err));
    }

    const writeToLocal= (text, trans, lang) =>{
        let translates = JSON.parse(localStorage.getItem('translates'));
        if(translates === null) {
            translates = []
          }

          translates.push({
            orig: text,
            origLang: lang,
            transl: trans
            
            });
          localStorage.setItem('translates', JSON.stringify(translates));
          console.log(localStorage);
    }

    return (
        <div >
            <h1>Hello, you are using VK Translate</h1>
            
    <div className='page-translate'>
    <nav>
      <div className='app-name'>
        VK Translate
      </div>
    </nav>
    <div className='translate-all'>
      <div className='translate-header'>
        
        <div className='language'>
          Для перевода нажмите Enter
        </div>
      </div>
      <div className='translate'>
        <div className='translate-from'>
          <form className="text-form" onSubmit={handleSubmit}>
            <input className='translate-input'
              placeholder="Введите текст"
              onChange={handleChange}
              value={text}
            />
          </form>
        </div>
        
        <div className='translate-out'>
          {translatedText}
        </div>
      </div>

    </div>
    <div className='history-button'>
      
      <Button className={'button'} goTo='/history'>
      <HistoryIcon/>
        </Button>
    </div>

    </div>
        </div>
    );
}



