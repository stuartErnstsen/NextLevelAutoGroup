import './App.scss';
// import { useState, useContext } from 'react';
// import AppContext from './Context/app-context';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';

const App = props => {
  // const { test } = useContext(AppContext)
  return (
    <div className="App">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
