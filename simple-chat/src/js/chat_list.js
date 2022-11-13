import "/css/chat_list.css"
import "/index.html"
import "/js/index.js"
import "/chat_list.html"

const chat = document.querySelector('.chat-field');


function listeningEvents(){

}

function createNewChat(){

}

function getLastMessage(){
    const text = document.querySelector('.mes-conent');
    const meta = document.querySelector('.message-meta');

    let messages = localStorage.getItem("messages");

    messages = JSON.parse(messages);
    messages.sort((a, b) => {return a["time"] < b["time"]})
    var lastMessage;
    for (let message of messages) {
        if (message != undefined && message["reciever"] === "Дженнифер"){
            lastMessage = message;
        }
    }
     
    const updateChatInfo = `
        <span class="chat-name">${lastMessage["reciever"]}</span>
        <span class="last-message">${lastMessage["content"]}</span>
    `
    const updateChatMeta = `
        <span class="last-message-time">${lastMessage["time"]}</span>
        <div class="message-status">
            <span class="material-icons">done</span>
        </div>
    `
    text.innerHTML = updateChatInfo
    meta.innerHTML = updateChatMeta

    console.log(messages);

}
console.log("yes");
getLastMessage();