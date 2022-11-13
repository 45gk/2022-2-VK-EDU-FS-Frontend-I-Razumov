const chat = document.querySelector('.chat-field');

//chat.addEventListener('click', changePage.bind(this))

function changePage(){
    window.location.href = './index.html'
}

function listeningEvents(){

}

function createNewChat(){

}

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