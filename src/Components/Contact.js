import React, { Component } from 'react';
import ContactForm from './ContactForm';
class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var province = this.props.data.address.province;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>
         
         <div className="row">
            <div className="eight columns">
            <ContactForm />
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Contact Info</h4>
					   <p className="address">
						   {name}<br />
						   {city}, {province} <br />
						   <span>{phone}</span> <br />
                     <span>{email}</span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
