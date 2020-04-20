import React from 'react';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
// import { Container, Row } from 'reactstrap';

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
