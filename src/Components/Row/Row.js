import React from "react"
import "./Row.css"

class Row extends React.Component{


    fixname(data){
        return data.toLowerCase()
    }

    openLinkInNewTab(url){
        window.open(url, "_blank");
    }

    render(){
        return(
            <div className="participant-row">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-10">
                                <span className="participant-name">{this.fixname(this.props.name)}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10">
                                <span className="participant-tracks-completed">Tracks completed: {this.props.num}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-md-offset-1">
                        <div className="qwiklabs-profile-bttn text-center" onClick={()=> window.open(this.props.url, "_blank")}>
                            Qwiklabs Profile Link
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-12">
                        Skill badges earned:
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {this.props.badges}
                    </div>
                </div>
            </div>
        );
    }
}

export default Row;