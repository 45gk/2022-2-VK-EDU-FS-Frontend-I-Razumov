import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import TranslatePage from './pages/TranslatePage/TranslatePage';
import HistoryPage from './pages/HistoryPage/HistoryPage';

function App()  {
  return (
    <Router>
      
        <Routes>
          <Route path="" element={<TranslatePage/>} />
          <Route path="/history" element={<HistoryPage/>} />
        </Routes>
     
    </Router>
  );
  
}

export default App;