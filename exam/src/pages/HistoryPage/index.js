function getTrans() {
    let translates = localStorage.getItem('translates');
    console.log(translates);
    if (translates != null && translates !== '') {
        translates = JSON.parse(translates);
        return translates;
    }

    return false;
}

export {getTrans};