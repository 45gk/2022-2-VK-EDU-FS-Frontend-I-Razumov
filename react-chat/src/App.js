import React from 'react';
import './App.css';

import PageChatList from './pages/PageChatList/PageChatList'
import PageChat from './pages/PageChat/PageChat'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'chat-list',
        }
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.currentPage === 'chat-list' ?
                        <PageChatList onClick={page => this.setState({currentPage: page})}/> :
                        <PageChat onClick={page => this.setState({currentPage: page})}/>
                }
            </div>
        );
    }
}

export default App;
