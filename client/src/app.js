import React from 'react'
import Register from './screens/Register'
import "./App.css"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Login from './screens/Login';

export default function App() {
  
  return (
    <>
    <Router>
    
    <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route index element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          
        </Routes>
    </Router>
    
    </>
  )
}
