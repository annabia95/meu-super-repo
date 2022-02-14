import React from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="header">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
