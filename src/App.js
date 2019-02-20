import React, { Component } from 'react';
import './App.css';
import Header from '../src/Header/Header';
import About from '../src/About/About';
import Contact from '../src/Contact/Contact';
import Footer from '../src/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;