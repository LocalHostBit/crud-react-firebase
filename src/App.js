import React, {useState} from 'react';
import styles from './assets/css/styles.css';
import Container from './components/Container';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <div className="App">
      <Container />
      <ToastContainer />
    </div>
  );
}

export default App;
