import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';


import PageChat from "./pages/PageChat/PageChat"
import PageChatList from "./pages/PageChatList/PageChatList"
import PageProfile from "./pages/PageProfile/PageProfile"
import PageChatGeneral from "./pages/PageChat/PageChatGeneral"
class App extends React.Component{
    render(){ return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/chat1' element={<PageChat />}/>
          <Route path='/chatGen' element={<PageChatGeneral/>}/>
          <Route path='/' element={<PageChatList/>}/>
          <Route path = '/prof1' element={<PageProfile/>}/>
          
        </Routes>

      </div>
    </Router>
  );
 }
}

export default App;