import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainlayout from './components/Mainlayout';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import WeatherApp from './components/WeatherApp';



const App = () => {
  const [data , setData] = useState();
  return (
    <div>
      {JSON.stringify(data)}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />} >
        <Route path="/login" element={<Login regDataLogin={data}/>} />
        <Route path="/register" element={<Register regLog={setData}/>} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/weatherapp" element={<WeatherApp />} /> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App