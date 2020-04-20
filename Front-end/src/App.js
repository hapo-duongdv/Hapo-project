import React from 'react';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import { Container, Row } from 'reactstrap';

class App extends React.Component {
  state = {
    click : false
  }

  onClick= () => {
    this.setState({
      click : !this.state.click
    })
  }
render() {
  return (
    <>
      <Row>
        <Sidebar clicked = {this.onClick}/>
        <NavBar clicked = {this.onClick}/>
      </Row>

    </>
  );
}
 
}

export default App;
