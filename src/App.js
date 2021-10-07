import React from 'react'
import Home from './home/home'
import { BrowserRouter, Route, Link } from "react-router-dom";
import About from './about/about'
import Contact from './contact/contact';
import Header from './header/header';
import Footer from './footer/footer';

function App(){
  return(
    <BrowserRouter>
    <Header/>
    <Route  exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Footer/>
    
    
    
    </BrowserRouter>
  )

}

export default App