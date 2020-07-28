import React, {Component} from 'react';
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import './appMarkUp.css'
import * as firebase from "firebase";

class App extends Component{

    componentDidMount() {
        const db = firebase.database();
        console.log(db);
    }
    render() {
        return (
            <div className="wrapper">
            <Header/>
        </div>
        );
    }

}

export default App;
