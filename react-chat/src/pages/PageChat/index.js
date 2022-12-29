function saveMessageToLocalStorage(message) {
    let messages = localStorage.getItem('messages');
    if (messages == null || messages === '') {
        localStorage.setItem('messages', JSON.stringify({'all': []}));
    }

    messages = localStorage.getItem('messages');
    let messages_content = JSON.parse(messages);
    if (messages === undefined) {
        return
    }

    messages_content.all.push(message);
    localStorage.setItem('messages', JSON.stringify(messages_content));
}

function getMessagesFromLocalStorage() {
    let messages = localStorage.getItem('messages');

    if (messages != null && messages !== '') {
        messages = JSON.parse(messages);
        return messages.all;
    }

    return false;
}

export {getMessagesFromLocalStorage, saveMessageToLocalStorage};