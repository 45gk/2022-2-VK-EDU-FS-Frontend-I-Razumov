function getTrans() {
    let translates = localStorage.getItem('translates');

    if (translates != null && translates !== '') {
        translates = JSON.parse(translates);
        return translates.all;
    }

    return false;
}

export {getTrans};