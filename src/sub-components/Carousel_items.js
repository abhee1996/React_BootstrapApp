import React, { Component } from 'react'
import img1 from '../'
export default class Carousel_items extends Component {
    render() {
        return (
            <div className="carousel-item">
                    <div className="container">
                    <div className="carousel-caption">
                    {/* <img src={./React_Bootstrap_website/react_bootstrap-website/images/chris-ried-ieic5Tq8YMk-unsplash.jpg}   
                        /> */}
                        {/* <img 
                        src={require('D:/ReactApps/React_Bootstrap_website/react_bootstrap-website/images/chris-ried-ieic5Tq8YMk-unsplash.jpg')} /> */}
                        <h1>Another example headline.</h1>
                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                    </div>
                    </div>
                </div>
        )
    }
}
