import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        var companyName = 'Erudite Private Limited';
        var tagLine = 'A software development company';
        var companyInfo = { City: 'Faisalabad', Address: 'Office # 37, 2nd floor, Kohinoor One' };
        return (
            <div className="App">
                <h2>{companyName}</h2>
                <div>{tagLine}</div>
                <div><span>{companyInfo.Address}</span>, <span>{companyInfo.City}</span></div>
            </div>
        );
    }
}

export default App;
