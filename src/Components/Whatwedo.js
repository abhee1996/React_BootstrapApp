import React, { Component } from 'react'
import chris from '../images/chris.jpg';
export default class Whatwedo extends Component {
    render() {
      const bgImg ={
        backgroundImage:`url(${chris})`,
        width: '100%',
        height: '100%',

      }
        return (
            

          <div className="row ">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5 ">
            <div  className="img-fluid  "  >
              <img src={chris} width="100%" />
            </div>
          </div>
          </div>
        )
    }
}
