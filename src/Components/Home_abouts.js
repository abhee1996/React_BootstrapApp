import React, { Component } from 'react'
import about from '../images/about.jpg';
export default class Home_abouts extends Component {
    render() {
      const bgImg ={
        backgroundImage:`url(${about})`,
        width: '100%',
        height: '100%',

      }
        return (
            <div className="row ">
              <div className="col-md-7">
                <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
              </div>
              <div className="col-md-5">
              <div  className="img-fluid  "  >
                <img src={about} width="100%" height="auto" placeholder="500x500"/>
                </div>
              </div>
            </div>
        )
    }
}
