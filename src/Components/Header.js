import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    // <li><a className="smoothscroll" href="#portfolio">Works</a></li> 
    //<li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
    return (
      <header id="home">

      <div id="bank-name">ACME Bank</div>

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll hard" href="#personal">Personal</a></li>
	         <li><a className="smoothscroll hard" href="#business">Business</a></li>
            <li><a className="smoothscroll hard" href="#loans">Loans</a></li>
            
            
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div id="input-placeholder">What would you like to do, {name}?</div>
            <div id="input-container">
               <div id="wave"></div>
               <input id="user-input" type="text" />
            </div>
            <div id="response-container"></div>
         <script data-version="development" src="scripts.js" id="vfassistant"></script>
      </div>

   </header>
    );
  }
}

export default Header;
