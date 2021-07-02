import React from 'react';
import './App.css';
import Form from './Form';
import Header from './header1';
import Footer from './footer';

function App() {
  return (
    <div>
    <Header />
    <div className="App">
     <Form/>
    </div>
    <div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
