import React from 'react';
import './App.css';
import WisniowaForm from './WisniowaForm'
import Header from './Header/';
import Footer from './Footer/';

function App() {
  return (
    <div className="App">
        <Header/>
            <WisniowaForm/>
        <Footer/>
    </div>
  );
}

export default App;
