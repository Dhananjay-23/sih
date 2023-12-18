import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Foot from './components/Foot'
import AboutPage from './pages/AboutPage';
import Map from './pages/Map';
import Prototype from './pages/Prototype';
import Trends from './pages/Trends';
import Grievence from './pages/Grievence';


function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
        <Routes>
            <Route path='/' element={<AboutPage /> }></Route>
            <Route path='/maps' element={<Map /> }></Route>
            <Route path='/prototype' element={<Prototype /> }></Route>
            <Route path='/grievance' element={<Grievence /> }></Route>
            <Route path='/trends' element={<Trends /> }></Route>

        </Routes>
    <Foot/>
    </BrowserRouter>
        
    </>
  )
}

export default App