import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Webframe from './pagedraw/webframe';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    render() {
        return <Webframe 
        text={this.state.text}
        onClick={this.onClick.bind(this)}
        onClick2={this.onClick2.bind(this)}
        />        
    }

    onClick(){
        alert("Added");

        this.setState({
            text: "$40.00"
        })
    } 

    onClick2(){
        alert("Added");

        this.setState({
            text: "$70.00"
        })
    } 
}

export default App;

