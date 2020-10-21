import React from "react"
import "./Details.css";

class Details extends React.Component{
    render(){
        return (
            <div className="description">
                <div className="container">
                <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center description-heading">
                            30 days of Google Cloud Leaderboard
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center description-content">
                            This is a leaderboard for the students participating in the 30 Days of Google Cloud Program from Bharati Vidyapeeth Deemed University College of Engineering Pune. See where you rank on the leaderboard!
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;