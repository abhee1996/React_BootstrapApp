import React, { Component } from 'react'
import Banner from '../Components/Banner';
import Events from '../Components/Events';
import Whatwedo from '../Components/Whatwedo';
import Home_abouts from '../Components/Home_abouts';
import img1 from '../images/img1.jpg';

export default class Home extends Component {
    render() {
        
        return (
           
           <>
            <Banner />

            <div class="container">
            <div className="col-md-12 my-5 text-center  text-uppercase">
                    <h1>New Events</h1>
                </div>
                <Events/>
            <hr/>
                <div className="col-md-12 my-5 text-center  text-uppercase">
                    <h1>what we do</h1>
                </div>

                <Whatwedo/>
            <hr/>
            <div className="col-md-12 my-5 text-center  text-uppercase">
                    <h1>About</h1>
            </div>
                <Home_abouts/>
            </div>
            
           </>

            
        
        
           
        )
    }
}
