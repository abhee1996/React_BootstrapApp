import React, { Component } from 'react';
import Jumbotron from '../Components/Jumbotron';
import Home_abouts from '../Components/Home_abouts';
import Thumbnail from '../Components/Thumbnail';
export default class About extends Component {
    render() {
        return (
            <>
            <div>
            <Jumbotron/>
            </div>
            <div className="col-md-12 my-5 text-center  text-Capitalized">
                <Home_abouts/>
            </div>
            <div className="row my-5 text-center  text-Capitalized">
                <Thumbnail/>
                <Thumbnail/>
                <Thumbnail/>
                
            </div>
            </>
        )
    }
}
