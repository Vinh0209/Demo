import React from 'react';
import ReactDOM from 'react-dom/client';
import "./main.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { productInputs, userInputs } from "./formSource";
import Login from './pages/login/Login';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
   <Routes>
    <Route path="/">
      <Route index element={<Home/>}/>
      <Route path="login" element={<Login />} />
      <Route path="users">
        <Route index element={<List/>}/>
        <Route path=":userId" element={<Single/>}/>
        <Route path="new" element={<New inputs={userInputs} title="Thêm người dùng mới"/>}/>
      </Route>
      <Route path="cars">
        <Route index element={<List/>}/>
        <Route path=":carId" element={<Single/>}/>
        <Route path="new" element={<New inputs={productInputs} title="Thêm xe mới"/>}/>
      </Route>
    </Route>
   </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
