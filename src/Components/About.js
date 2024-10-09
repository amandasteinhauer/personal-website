import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "/images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var province = this.props.data.address.province;
      var email = this.props.data.email;
      // var resumeDownload = "/assets/" + this.props.data.resumedownload;
    }

    /*
    <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" target="_blank" rel="noopener noreferrer" download="AmandaSteinhauerResume.pdf"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
    */

    return (
   //    <section id="about">
   //    <div className="row">
   //       <div className="three columns">
   //          <img className="profile-pic"  src={process.env.PUBLIC_URL + profilepic} alt="Amanda Steinhauer Profile Pic" />
   //       </div>
   //       <div className="nine columns main-col">
   //          <h2>About Me</h2>

   //          <p>{bio}</p>
   //          <div className="row">
   //             <div className="columns contact-details">
   //                <h2>Contact Details</h2>
   //                <p className="address">
	// 					   <span>{name}</span><br />
	// 					   <span>{city}, {province}</span><br />
   //                   <span><a href="mailto:amanda.steinhauer@protonmail.com">{email}</a></span>
	// 				   </p>
   //             </div>
   //          </div>
   //       </div>
   //    </div>
   // </section>
      <section>
         <div id="input-placeholder">Welcome to acme bank {name}</div>
         <div id="input-container">
            <div id="wave"></div>
            <input id="user-input" type="text" />
         </div>
         <div id="response-container"></div>
         <script data-version="development" src="scripts.js" id="vfassistant"></script>
      </section>
    );
  }
}

export default About;
