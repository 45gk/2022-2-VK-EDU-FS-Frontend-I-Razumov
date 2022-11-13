//import "../css/index.css"


const chat = document.querySelector('.messagefield');
const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const message = document.querySelector('.message');
getFromLocalStorage();



form.addEventListener('submit', this.handleSubmit.bind(this));
form.addEventListener('keypress', this.handleKeyPress.bind(this));

function handleSubmit (event) {
    
    event.preventDefault();
    sendMessage();
    console.log(localStorage);
    
    
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

// Обработчик Enter
function handleKeyPress (event) {
    if (event.keyCode === 13 & input.value !== "" ) {
        event.preventDefault();
        sendMessage();
     //   form.dispatchEvent(new Event('submit'));
        
    }
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
        new_message_img.src = "/src/photos/Tom.jpg";
        
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
    
    // Проверка на пустоту
    if (input.value === "") {
        return;
    }
    //узнаём время
    Data = new Date();
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
    input.value = "";

}