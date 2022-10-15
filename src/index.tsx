import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import User from './pages/User/User';
import NewCollection from './pages/NewCollection/NewCollection';
import Collection from './pages/Collection/Collections';
import NewImage from './pages/NewImage/NewImage';
import Logout from './pages/Logout/Logout';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/users/:userId" element={<User/>} />
          <Route path="/collections" element={<User/>} />
          <Route path="/collections/:collectionId" element={<Collection/>} />
          <Route path="/collections/new" element={<NewCollection/>} />
          <Route path="/collections/:collectionId/new" element={<NewImage/>} />
          <Route path="/logout" element={<Logout/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
