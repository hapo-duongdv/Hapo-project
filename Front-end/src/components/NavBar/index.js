import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Form,
    Input,
    Button,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faComment, faBell, faThLarge } from '@fortawesome/free-solid-svg-icons';


class NavBar extends React.Component {
    state = {
        click : false
      }
    
      onClick= () => {
        this.setState({
          click : !this.state.click
        })
      }
    render() {
        console.log(this.state.click);
        return (
            <>
                {!this.state.click ?
                    <>
                        <div className="nav-bar col-md-10" style={{backgroundColor : "red"}}>
                            <Navbar color="light" light expand="md">
                                <NavbarToggler />
                                <Collapse navbar>
                                    <NavLink href="#" onClick={this.onClick}><FontAwesomeIcon icon={faBars} /></NavLink>
                                    <Nav navbar>
                                        <NavItem >
                                            <NavLink href="#">Home</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#">Contact</NavLink>
                                        </NavItem>
                                    </Nav>
                                    <Form inline className="ml-3">
                                        <InputGroup>
                                            <Input type="search" placeholder="Search" />
                                            <InputGroupAddon addonType="prepend"><Button className="btn btn-navbar" type="submit"><FontAwesomeIcon icon={faSearch} /></Button></InputGroupAddon>
                                        </InputGroup>
                                    </Form>
                                    <Nav className="ml-auto" navbar>
                                        <NavItem >
                                            <NavLink href="#"><FontAwesomeIcon icon={faComment} /></NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#"><FontAwesomeIcon icon={faBell} /></NavLink>
                                        </NavItem>
                                        <NavItem >
                                            <NavLink href="#"><FontAwesomeIcon icon={faThLarge} /></NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        </div></>
                    : <>
                        <div className="nav-bar col-md-10" style={{backgroundColor : "yellow"}}>
                            <Navbar color="light" light expand="md">
                                <NavbarToggler />
                                <Collapse navbar>
                                    <NavLink href="#" onClick={this.props.clicked}><FontAwesomeIcon icon={faBars} /></NavLink>
                                    <Nav navbar>
                                        <NavItem >
                                            <NavLink href="#">Home</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#">Contact</NavLink>
                                        </NavItem>
                                    </Nav>
                                    <Form inline className="ml-3">
                                        <InputGroup>
                                            <Input type="search" placeholder="Search" />
                                            <InputGroupAddon addonType="prepend"><Button className="btn btn-navbar" type="submit"><FontAwesomeIcon icon={faSearch} /></Button></InputGroupAddon>
                                        </InputGroup>
                                    </Form>
                                    <Nav className="ml-auto" navbar>
                                        <NavItem >
                                            <NavLink href="#"><FontAwesomeIcon icon={faComment} /></NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#"><FontAwesomeIcon icon={faBell} /></NavLink>
                                        </NavItem>
                                        <NavItem >
                                            <NavLink href="#"><FontAwesomeIcon icon={faThLarge} /></NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        </div></>
                }
            </>

        )
    }
}

export default NavBar;
