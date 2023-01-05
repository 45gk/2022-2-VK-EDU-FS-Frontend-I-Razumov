import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';


import PageChat from "./pages/PageChat/PageChat"
import PageChatList from "./pages/PageChatList/PageChatList"
import PageProfile from "./pages/PageProfile/PageProfile"
class App extends React.Component{
    render(){ return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/chat1' element={<PageChat userID = '1'/>}/>
          <Route path='/chat2' element={<PageChat userID = '2'/>}/>
          <Route path='/chat3' element={<PageChat userID = '3'/>}/>
          <Route path='/' element={<PageChatList/>}/>
          <Route path = '/prof1' element={<PageProfile userID = '1'/>}/>
          <Route path = '/prof2' element={<PageProfile userID = '2'/>}/>
          <Route path = '/prof3' element={<PageProfile userID = '3'/>}/>
        </Routes>

      </div>
    </Router>
  );
 }
}

export default App;