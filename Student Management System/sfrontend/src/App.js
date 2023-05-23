import {BrowserRouter, BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css';
// import CounterClass from './components/CounterClass';
// import CounterFunction from './components/CounterFunction';
import Header from './components/Header';
import Home from './components/Home';
import AddStudent from './components/AddStudent';
import AllStudent from './components/AllStudent';

// function App() {
//   return (
//     <div className="App">
     
//     <h1> Hello React </h1>
//     <CounterClass/>
//     <CounterFunction/>
    
//     </div>
//   );
// }

function App(){
  return(
      <div>
        <Router>
          <Header />
          
          <Routes>   
          <Route path="/home" element={<Home/>} />       
          <Route path='/' element={<AllStudent />} />
          <Route path='/add' element={<AddStudent />} />
          </Routes>
        </Router>

      </div>
    
    
  );
}

export default App;
