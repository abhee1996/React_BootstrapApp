import React, { Component } from 'react'
import img1 from '../images/img1.jpg';

export default class Cards extends Component {
    render() {
        return (
            <div className="col-lg-4">
                <img src={img1}  className="rounded-circle m-5 p-2" width="80%"/>
                <h2 className="text-center">Heading</h2>
                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                <p className="text-center"><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div>
        )
    }
}
