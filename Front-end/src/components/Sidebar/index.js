import React from 'react';
import '../../css/sidebar.css';
import { NavItem, NavLink } from "reactstrap";
import ModalLogin from "./modalLogin";

class Sidebar extends React.Component {
    state = {
        toggleLoginModalVisible: false,
    }

    toggleLoginModalVisible = () => {
        this.setState({
            loginModalVisible: !this.state.loginModalVisible
        });
    };
    render() {
        return (
            <div className="main-sidebar">
                {/* // brand logo */}
                <a href="/" className="brand-link d-flex justify-content-center align-items-center">
                    <img src="https://adminlte.io/themes/dev/AdminLTE/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-img" style={{ opacity: .8 }} />
                    <span className="brand-text p-2 text-white">AdminLTE 3</span>
                </a>
                {/* Modal login */}
                <div className="btn-login text-center">
                    <NavLink className="text-white" href="#" onClick={this.toggleLoginModalVisible}><span>Login</span></NavLink>
                </div>
                <ModalLogin
                visible={this.state.loginModalVisible}
                onToggle={this.toggleLoginModalVisible}
                submit={this.login} />
            </div>
        )
    }
}

export default Sidebar;
