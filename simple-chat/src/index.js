//import './chat_list.css';
import './index.css'
//import './chat_list.css'




function main() {
    console.log(localStorage);
    let pathname = document.location.pathname
    let filename = pathname.split('/').slice(-1)[0]
    console.log(filename)
    if (filename === 'index.html'|| filename === '') {
        chat_index();
    } else if (filename === 'chat_list.html') {
        chat_list_f();
        
    }
}

function chat_index(){
    const chat = document.querySelector('.messagefield');
const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const message = document.querySelector('.message');


getFromLocalStorage();




form.addEventListener('submit', handleSubmit)
form.addEventListener('keypress', handleKeyPress)


function handleSubmit (event) {
    
    event.preventDefault();
    sendMessage();
    console.log('yo');
    
    
}
// Обработчик Enter
function handleKeyPress(event) {
    if (event.keyCode === 13) {
        form.dispatchEvent(new Event('submit'));
        sendMessage();
    }
}


    // Добавляем в localStorage
    function addToLocal(value){
        console.log(value);
        let messages = localStorage.getItem("messages") || "[]";
        console.log(messages);
        messages = JSON.parse(messages);
        messages.push(value);
        localStorage.setItem("messages", JSON.stringify(messages));
    }


        // Извлечь данные из LocalStorage
        function getFromLocalStorage(){
            let messages = localStorage.getItem('messages');


            // Проверка на пустьоту
        if (localStorage.getItem('messages') !== null) {
            // При успехе просто отображаем наши сообщения из localStorage
            messages = JSON.parse(messages);
            for (let message of messages) {
                if (message != undefined && message["reciever"] === "Дженнифер"){
                createDiv(message);
                }
            }
        }
        else{
            localStorage.setItem('messages', JSON.stringify([]));
        }
        }


// отображение сообщения в чате
    function createDiv(message){
        if (message !== {}){
            console.log(message);
            
            // формирования нового сообщения 
            let new_message_img_div = document.createElement('div');
            new_message_img_div.className = "atalk-im";
            
            let new_message_img = document.createElement('img')
            new_message_img.src = "https://i.pinimg.com/originals/7a/26/8f/7a268f7ce7e63295d5c26922335adda9.jpg";
            
            let new_message = document.createElement('div');
            new_message.className = "message message-right";
            
            let new_message_text = document.createElement('span');
            new_message_text.className = "message-text";
            new_message_text.innerHTML = message.text;
            
            let new_message_meta = document.createElement('div');
            new_message_meta.className = "message-meta";
            
            let new_message_time = document.createElement('span');
            new_message_time.className = "message-time";
            new_message_time.innerHTML = message.time;
            
            let new_message_status = document.createElement('span');
            new_message_status.className = "message-status";
            
            new_message_status.innerHTML = "<span class='material-icons'>done_all</span>";
            console.log(new_message);
            

            // сборка нового сообщения
            chat.append(new_message);
            new_message.append(new_message_img_div);
            new_message_img_div.append(new_message_img);
            new_message.append(new_message_text);
            
            new_message.append(new_message_meta);
            new_message_meta.append(new_message_time);
            new_message_meta.append(new_message_status);
            console.log(new_message);
            //document.body.messagefield.appendChild(new_message);
        }
        
        

    }

    // Функция отсылки сообщения
    function sendMessage(){
        console.log('send');
        // Проверка на пустоту
        if (input.value === "") {
            return;
        }
        //узнаём время
        let Data = new Date();
        let hour = Data.getHours();
        let minutes =  Data.getMinutes();
            
        if (minutes <10){
            minutes = String("0"+minutes);
        }
        
        // составляем сообщение
        let message = {
            'text': input.value,
            'reciever': "Дженнифер",
            'time': hour+":"+minutes

        }
        // Добавляем в localStorage, создаём сообщение в чате и очищаем инпут
        addToLocal(message);
        createDiv(message);
        //document.querySelector('.form-input').value = ""
        input.value = "";

    }
}

function chat_list_f(){
    
    const chat = document.querySelector('.chat-field');
    
    
    
    
    
    
    function getLastMessage(){
        const text = document.querySelector('.mes-content');
        const meta = document.querySelector('.message-meta');
    
        let messages = localStorage.getItem("messages");
        if (messages.length == []){
            const defaultText = `
                <span class="message-name">Дженнифер</span>
                <span class="message-text">Привет, Джен, всё нормально, просто на работе завал.</span>
            `
            const defaultMeta = `
                <span class="message-time">10:53</span>
                <span class="message-status">
                    <i class="material-icons">done_all</i>
                </span>
            `
            text.innerHTML = defaultText
            meta.innerHTML = defaultMeta
            return
        }
        messages = localStorage.getItem("messages");
        messages = JSON.parse(messages);
        //messages.sort((a, b) => {return a["time"] < b["time"]})
        console.log("yes");
        const lastMessage = messages.at(-1);
        console.log(lastMessage);
        const updateChatInfo = `
                <span class="message-name">`+String(lastMessage['reciever'])+`</span>
                <span class="message-text">`+String(lastMessage['text'])+`</span>
            `
            const updateChatMeta = `
                <span class="message-time">`+String(lastMessage['time'])+`</span>
                <span class="message-status">
                    <i class="material-icons">done_all</i>
                </span>
            `
                //`+String(lastMessage['reciever'])+`
        console.log(updateChatInfo);
        console.log(updateChatMeta);
        console.log(text);
        console.log(meta);
        text.innerHTML = updateChatInfo;
        meta.innerHTML = updateChatMeta;
    
        console.log(messages);
    
    }
    console.log("yes");
    getLastMessage();
}
main();