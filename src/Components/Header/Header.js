import React from "react";
import "./Header.css";

import dscLogo from "../../assets/images/dsc-logo.png"

class Header extends React.Component{

    render(){
        return(
            <div className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={dscLogo} className="img-responsive" alt="DSC Logo" />
                        </div>
                        <div className="col-md-6 col-md-offset-3">
                            <div className="row">
                            <div className="row">
                                <div className="col-md-10 col-md-offset-2 header-text header-txt-bold">
                                    Developer Student Clubs
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-10 col-md-offset-2 header-text header-chapter-name">
                                    Bharati Vidyapeeth Deemed University College of Engineering Pune
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;