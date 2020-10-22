import React from "react";
import "./Footer.css"

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 text-center">
                            Made with <span className="heart-icon"> &hearts; </span> by Developer Student Clubs Bharati Vidyapeeth Deemed University College of Engineering Pune
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;