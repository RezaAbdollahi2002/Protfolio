import React from 'react';
import {Routes,Route } from 'react-router-dom';
import {Homepage,Navbar, Projects, Research, Resume, Contact } from './components/index';

const App = () => {



  return (
        <div>
          <Routes>
            <Route path='/' element={
              <>
                <Homepage />
              </>
              }/>
              
          </Routes>
        </div>
  )
}

export default App;
  