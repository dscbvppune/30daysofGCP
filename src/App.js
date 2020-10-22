import React from 'react';
import Header from "./Components/Header/Header";
import Details from "./Components/Details/Details";
import Results from "./Components/Results/Results";
import Footer from "./Components/Footer/Footer"
import './App.css';

class App extends React.Component {

  render(){
    return (
      <div>
        <Header />
        <Details />
        <Results />
        <Footer />
      </div>
    );
  }
}

export default App;