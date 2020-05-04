import React, { Component } from 'react';
import chris from '../images/chris.jpg';
export default class Jumbotron extends Component {
    render() {
         const pos ={
             position: 'absolute'
             
           };
           const bgImg ={
            backgroundImage:`url(${chris})`,
            width: '100%',
            height: 'auto',
          };
        return (
            <>
             <section style={bgImg }  class=" position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center text-dark"> 
                
                {/* <img src={chris} width="100%" height="auto"  /> */}
                
                
                <div  className="col-md-5 p-lg-5 mx-auto my-5  position-aboulute overflow">
                        <h1>About Us</h1>
                        <p class="lead text-dark">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                        <p>
                            <a href="#" class="btn btn-primary my-2">Main call to action</a>
                            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
                        </p>
                </div>
                
             </section> 
            </>
        )
    }
}
