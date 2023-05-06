import React, {useState, useEffect} from 'react';

// import Sidebar from './components/widgets/Sidebar';
import Home from './page/Home';

import Signup from './page/Signup';
import Login from './page/Login';

import {Routes, Route} from 'react-router-dom';

import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App bg-primary">
        <section>          
          <div>            
            <Routes>
           
                <Route 
                  path="/home"
                  element={
                    
                      < Home />
                    
                  
                  }
                />

              
                           
              
              <Route path="/" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>          
          </div>
        </section>

      </div>
    </Router>
  );
}

export default App;



