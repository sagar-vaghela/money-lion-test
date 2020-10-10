import React from 'react';
import './App.css';
import { Welcome } from './components/welcome/Welcome';
import Personal from './components/personal/Personal';
import DOB from './components/dob/DOB';
import Agreement from './components/agreement/Agreement';
import { Header } from './components/header/Header';
import { Container } from "semantic-ui-react";

function App() {
  return (
    <Container>
      <Header />
      <Welcome />
      {/* <Personal/> */}
      {/* <DOB /> */}
      {/* <Agreement /> */}
    </Container>
  );
}

export default App;
