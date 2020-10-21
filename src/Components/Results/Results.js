import React from "react";
import Row from "../Row/Row";
import "./Results.css"

class Results extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          list: [],
          iteratedOnce: false
        }
      }

      componentDidMount(){
        if(this.state.iteratedOnce !== true){
            this.handleFileUpload(require("../../assets/data/src.csv"));
        }
      }
    
      processData = dataString => {
        const dataStringLines = dataString.split(/\r\n|\n/);
        const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
    
        const list = [];
        for (let i = 1; i < dataStringLines.length; i++) {
          const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
          if (headers && row.length === headers.length) {
            const obj = {};
            for (let j = 0; j < headers.length; j++) {
              let d = row[j];
              if (d.length > 0) {
                if (d[0] === '"')
                  d = d.substring(1, d.length - 1);
                if (d[d.length - 1] === '"')
                  d = d.substring(d.length - 2, 1);
              }
              if (headers[j]) {
                obj[headers[j]] = d;
              }
            }
    
              list.push(obj);
          }
        }

        if(this.state.iteratedOnce === false){
            this.setState({
                list: list.sort((a, b) => ((b.numOfSkillBadgesCompletedInOne + b.numOfSkillBadgesCompletedInTwo) - (a.numOfSkillBadgesCompletedInOne + a.numOfSkillBadgesCompletedInTwo))),
                iteratedOnce: true
            })
        }

      }
    
      handleFileUpload = file =>  {
        var rawFile = new XMLHttpRequest();
            rawFile.open("GET", file, false);
            rawFile.onreadystatechange = () => {
                if (rawFile.readyState === 4) {
                    if (rawFile.status === 200 || rawFile.status === 0) {
                        var allText = rawFile.responseText;
                        this.processData(allText);
                    }
                }
            };
            rawFile.send(null);
      }

      render(){
          const rowsOfParticipantsDetails = this.state.list.map((d) => <Row
            key={d.qwiklabsProfileURL}
            num={parseInt(d.numOfSkillBadgesCompletedInOne) + parseInt(d.numOfSkillBadgesCompletedInTwo)}
            url={d.qwiklabsProfileURL}
            badges={d.trackOne + " " + d.trackTwo}
            name={d.name} />);
          return (
            <div className="results">
                <div className="container">
                    {rowsOfParticipantsDetails}
                </div>
            </div>
          );
      }
}

export default Results;