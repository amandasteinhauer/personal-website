import { useForm, ValidationError } from '@formspree/react';

function ContactForm(){
    const [state, handleSubmit] = useForm("xrgjkqgp");
   if (state.succeeded) {
       return (
            <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!<br />
            </div>
           
       );
   }
   return (
       <form onSubmit={handleSubmit}>
           <fieldset>
            <div>
                    <label htmlFor="contactName">Name <span className="required">*</span></label>
                    <input type="text" defaultValue="" size="35" id="contactName" name="contactName" />
                    <ValidationError prefix="Name" field="contactName" errors={state.errors} />
            </div>
            <div>
                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                    <input type="text" defaultValue="" size="35" id="contactEmail" name="email" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input type="text" defaultValue="" size="35" id="contactSubject" name="subject" />
            </div>
            <div>
                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                <textarea cols="50" rows="15" id="contactMessage" name="message"></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <div>
                <button className="submit" disabled={state.submitting} type="submit">Submit</button>
                <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                </span>
            </div>
          </fieldset>
       </form>
    );
 }

 export default ContactForm;