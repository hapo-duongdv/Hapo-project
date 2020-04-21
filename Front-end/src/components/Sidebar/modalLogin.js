import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";

class ModalLogin extends React.Component {
    state = {
        email: "",
        password: "",
        remember_me: false,
    }
    onEmailOnChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    onPasswordlOnChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    onRemember_meOnChange = () => {
        this.setState({
            remember_me: !this.state.remember_me
        })
    }
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.visible}
                    // toggle={this.props.onToggle}
                    className={this.props.className}
                >
                    <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onEmailOnChange}
                                    placeholder="Enter Email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input
                                    onChange={this.onPasswordlOnChange}
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                />
                            </FormGroup>
                            <FormGroup check>
                                <Input type="checkbox" onChange={this.onRemember_meOnChange} />Remember me
                    </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.onLogin}>Login</Button>
                        <Button color="secondary" onClick={this.props.onToggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalLogin;