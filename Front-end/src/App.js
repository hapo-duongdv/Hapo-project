import React from 'react';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
// import {Row } from 'reactstrap';

class App extends React.Component {
render() {
  return (
    <>
        <Sidebar />
        <NavBar />

    </>
  );
}
 
}

export default App;
