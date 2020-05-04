import React, { Component } from 'react'

export default class Form extends Component {
    
    state = {
        
        fname : "",
        lname:"",
        email:"",
        discription:"",
        gender:""


    };
    
    handleChange = e =>{
       // console.log([e.target.name]);
        this.setState({[e.target.name]: e.target.value });
    };
    handleSubmit = e =>{

    }
    render() {
        
        return (
            <>
            <form type="post" className="mt-5 p-5 ">
                <div className="row my-5 justify-content-self">
                    <div className="col-md-5">

                    </div>
                 <div className="col-md-5">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-center  my-1">
                        <h3>Contact Us</h3>
                        <text>React Controlled component</text>
                        </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6  my-1">
                    <input type="text" className="form-control" 
                    name="fname"
                    placeholder="First Name"
                     value={this.state.fname}
                    onChange={this.handleChange}/>
                    </div> 
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6  my-1">
                    <input type="text" className="form-control" 
                    placeholder="Last Name"
                     name="lname"
                    value={this.state.lname}
                    onChange={this.handleChange}/>

                    </div> 
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6  my-1">
                    <input type="text" className="form-control"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}/>
                    
                    </div> 
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-1 ">
                        
                   <textarea 
                    className="form-control" 
                    placeholder="your message"
                    name="discription"
                    value={this.state.discription}
                    onChange={this.handleChange} 
                    />  
                    </div> 
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-1 ">
                        
                    <select className="form-control" name="gender" value={this.state.gender}>
                        <option name="male" value="male">Male</option>
                        <option name="female" value="Female">Female</option>
                        <option name-="nopreferance" value="No Preferance">No Preferance</option>
                    </select>
 
                    </div> 
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-1 ">
                    <button 
                        className="btn  btn-success" 
                        type="submit"  
                        value="Submit"
                        onClick={ this.handleSubmit} > 
                        Submit
                    </button> 
                    </div> 
                 </div>
                </div>
            </form>
            </>
        )
    }
}
