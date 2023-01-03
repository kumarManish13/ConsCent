import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetStarted from './GetStarted';
import StartDemo from './StartDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        
          <Route path="Get_Started" element={<GetStarted />} />
          <Route path="Start_Demo" element={<StartDemo />} />
          
        
      </Routes>
    </BrowserRouter>

   

   

  </React.StrictMode>
);


reportWebVitals();
