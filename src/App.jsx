import React from 'react';
import './App.css';
import Header from './Header.jsx';
import Routes from './routes.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
