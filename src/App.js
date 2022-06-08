import './index.css';

import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

import Company from './components/Company';
import Contact from './components/Contact';
import Employee from './components/Employee';
import Invate from './components/Invate';
import Navigation from './components/Navigation';
import React  from 'react';
import SearchJob from './components/SearchJob';

function App() {
 
  return (
    <Router>
    <main className='container'>
    <Navigation/>
    <Routes>
    <Route path="/company/" element={ <Company/>}/>
     <Route path="/employee/" element={ <Employee/>}/>
     <Route path="/searchJob/" element={ <SearchJob/>}/> 
     <Route path="/contact/" element={ <Contact/>}/>
     <Route path="/invate/" element={ <Invate/>}/>
   </Routes>
   </main>
   </Router>
    
  );
}

export default App;
