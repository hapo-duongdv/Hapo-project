import React from 'react';
import '../../css/sidebar.css'

class Sidebar extends React.Component {
    render() {
        // console.log("sidebar", this.props);
        return (
            <>
                {!this.props.clicked ?
                    <>
                        <div className="main-sidebar col-md-2">
                            {/* // brand logo */}
                            <a href="/" className="brand-link">
                                <img src="https://adminlte.io/themes/dev/AdminLTE/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-img" style={{ opacity: .8 }} />
                                <span className="brand-text">AdminLTE 3</span>
                            </a>
                        </div>
                    </> : <>
                        <div className="main-sidebar col-md-2">
                            {/* // brand logo */}
                            <a href="/" className="brand-link">
                                <img src="https://adminlte.io/themes/dev/AdminLTE/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-img" style={{ opacity: .8 }} />
                                <span className="brand-text">AdminLTE 3</span>
                            </a>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default Sidebar;
