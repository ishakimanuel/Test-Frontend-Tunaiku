import React, { Component } from 'react';
import '../style/scss/App.css';
import Header from './Header';
import Hero from './Hero';
import Feature from './Feature';
import Form from './Form';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="content">
          <Hero />
          <Feature />
          <Form />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
