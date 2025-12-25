import React from 'react'
import {Routes,Route } from 'react-router-dom';
import {Homepage,Navbar, Projects, Research, Resume, Contact } from './components/index';

const App = () => {
  return (
        <div>
          <Routes>
            <Route path='/' element={
              <>
                <Navbar />
                <Homepage />
              </>
              }/>
              
              <Route path='/projects' element={
                <>
                  <Navbar />
                  <Projects />
                </>}/>
              <Route path='/resume' element={
                <>
                  <Navbar />
                  <Resume />
                </>}/>
              <Route path='/contact' element={
                <>
                  <Navbar />
                  <Contact />
                </>
                }/>
                <Route path='/research' element={
                <>
                  <Navbar />
                  <Research />
                </>
                }/>
          </Routes>
        </div>
  )
}

export default App;
  