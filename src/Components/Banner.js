import React, { Component } from 'react'
import img1 from '../images/img1.jpg';
export default class Banner extends Component {
    render() {
      const bgImg ={
        backgroundImage:`url(${img1})`,
        width: '100%',
        height: 'auto',
      }
        return (
            <div  style={bgImg } class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center text-white">
                {/* <img src={img1} width="100%" /> */}
                  <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class=" font-weight-normal">Punny headline</h1>
                    <p class="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
                    <a class="btn btn-success" href="#">Coming soon</a>
                  </div>
                  <div class="product-device box-shadow d-none d-md-block"></div>
                  <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </div>
        )
    }
}
