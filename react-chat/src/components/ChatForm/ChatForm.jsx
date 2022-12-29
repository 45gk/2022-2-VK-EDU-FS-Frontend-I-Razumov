import React, {useState} from 'react';
import './ChatForm.scss';

import Button from '../Button/Button'
import AttachmentIcon from '@mui/icons-material/Attachment';


export default function ChatForm(props) {
    const [value, setValue] = useState('');

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (value === '') {
            return;
        }

        const date = new Date();
        let message = {
            'text': value,
            'time': `${date.getHours()}:${date.getMinutes()}`,
            'sender_name': 'Default'
        };

        props.sendMessage(message);
        setValue('');
    }

    return (
        <form className={'chat-form'} action='/' onSubmit={handleSubmit}>
            <input className={'form-input'}
                   name={'input-text'}
                   placeholder={'Введите сообщение'}
                   type={'text'}
                   value={value}
                   onChange={handleChange}/>
            <Button className={'attachment-button'} onClick={() => {
            }}>
                <AttachmentIcon/>
            </Button>
        </form>
    );
}
