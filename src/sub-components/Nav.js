import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/nav.scss';
export default class Nav extends Component {

  handleSearch = e =>{


  }
    render() {
        const floatRight ={
            float: 'right', 
          }
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-info">
              
              
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
              <div className="col-md-2 ">
                  <Link className=" navbar-brand" to="/">CityLink</Link>
              </div>
              <div className="col-md-6"></div>

              <div  className="col-md-4  collapse navbar-collapse navbar-right" id="navbarsExampleDefault">
                  <ul className="navbar-nav ">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                  </ul>
              
              </div>
              
            </nav>
        )
    }
}
