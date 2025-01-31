import React from 'react'
import './App.css' ;
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminSignup from './pages/adminsignup'; 
import TeacherSignup from './pages/teachersignup'; 
import Dashboard from './pages/dashboard';
import AboutUs from './pages/aboutus';
import Headpage from './Components/Header';
import Contactus from './pages/Contactus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {      
  return (
  <div className='App'>
    <BrowserRouter>
           <Headpage/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/AdminLogin' element={<AdminLogin/>}/>
          <Route path='/adminsignup' element={<AdminSignup/>}/>
          <Route path='/teachersignup' element={<TeacherSignup/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/Contactus' element={<Contactus/>}/>
          



        </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App;
