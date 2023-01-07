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

function getMessagesFromLocalStorage(userID) {
    let messages = localStorage.getItem('messages');

    if (messages != null && messages !== '') {
        let messages1 = {'all':[]};
        console.log(messages1)
        messages = JSON.parse(messages);
        
        
        for (var i=0;i<messages.all.length;i++){
            if (messages.all[i].sender_id===userID){
                messages1.all.push(messages.all[i]);
                
            }
            
        }
        console.log(messages1);
        return messages1.all;
    }

    return false;
}

export {getMessagesFromLocalStorage, saveMessageToLocalStorage};
