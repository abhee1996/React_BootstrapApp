import React, { Component } from 'react'
import chris from '../images/chris.jpg';
export default class Thumbnail extends Component {
    render() {
      const bgImg ={
        backgroundImage:`url(${chris})`,
        width: '100%',
        height: 'auto'

      };
        return (
            <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div  className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail">
              <img src={chris} width="100%" height="auto"/>
            </div>
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        )
    }
}
