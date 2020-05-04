import React  from 'react';

import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Switch ,Route } from 'react-router-dom';



class App extends React.Component{
   render(){
     return (
       <React.Fragment>
        <Router>
          
          <Header/>

          <Switch>
            <Route path="/" exact  component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>

          </Switch>
          
        </Router>
        <Footer/>
      
       </React.Fragment>
     );
   }
 }
export default App;
