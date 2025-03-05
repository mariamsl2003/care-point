import React from 'react'
import Home from './pages/home'
import Doctor from './pages/doctor'
import Contact from './pages/contact'
import Appointments from './pages/appointments'
import About from './pages/about'
import Login from './pages/login'
import MyAppointments from './pages/my_appintments'
import MyProfile from './pages/my_profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}>home</Route>
        <Route path='/all-doctors' element={<Doctor />}>all doctors</Route>
        <Route path='/all-doctors/:speciality' element={<Doctor />}>all doctors</Route>
        <Route path='/contact' element={<Contact />}>contact</Route>
        <Route path='/appointments/:docid' element={<Appointments />}>appointments</Route>
        <Route path='/about' element={<About />}>about</Route>
        <Route path='/login' element={<Login />}>login</Route>
        <Route path='/myappointments' element={<MyAppointments />}>my appointments</Route>
        <Route path='/myprofile' element={<MyProfile />}>my profile</Route>
      </Routes>
    </div>
  )
}

export default App