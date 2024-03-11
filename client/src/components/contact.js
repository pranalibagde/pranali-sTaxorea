import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './contact.css';
import contactSecImg from '../images/contactSecImg.png';
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <section className='contactSection'>

        <Navbar />

        <div className='contactSectionFirst'>
            <div className='container'>
               <div className='row' >
            <div className='col-6 contactSectionFirstLeft justify-content-center align-items-start'>
                <h1>Contact Us</h1>
                <h4>Elevate Your Accounting</h4>
            </div>
            <div className='col-6 contactSectionFirstRight d-flex justify-content-end align-items-end'>
                <img src={contactSecImg} />
            </div>
          </div>
          
          </div>
        </div>

        <div className='contactSectionSecond'>
      <div className='container'>
        <div className='row contactSectionSecond'>

          <div className='col-6 contactSectionSecondLeft d-flex justify-content-start align-items-start'>
            <div>
              <h2>Contact Details</h2>

              <div className='row ContactDetailsRow'>
                <div className='col-2 Icon d-flex justify-content-center align-items-center'>
                  <IoLocationOutline />
                </div>
                <div className='col-10'>
                  <h6>Taxoreo</h6>
                  <p>15 Bhande Plot, Umred Road, Near Sheetla Mata Mandir, Nagpur - 440 024</p>
                </div>
              </div>

              <div className='row ContactDetailsRow'>
                <div className='col-2 Icon d-flex justify-content-center align-items-center'>
                  <HiOutlineMailOpen />
                </div>
                <div className='col-10'>
                  <p>info@taxoreo.in</p>
                  <p>support@taxoreo.in</p>
                </div>
              </div>

              <div className='row ContactDetailsRow'>
                <div className='col-2 Icon d-flex justify-content-center align-items-center'>
                    <IoCallOutline />
                    </div>
                <div className='col-10'>
                  <p>+91 9604121000</p>
                  <p>+91 712-2714080</p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form Section */}
          <div className='col-6 contactSectionSecondRight d-flex flex-column '>
             <h2>Contact Form</h2>

          <div className='formSection'>
             <div className="formField">
              <label for="exampleFormControlInput1" class="formLabel"> Name</label>
              <input type="email" class="form-control formControl" id="" placeholder="Enter Your First Name"/>
           </div>
           <div className="formField">
              <label for="exampleFormControlInput1" class="formLabel"> Email</label>
              <input type="email" className="form-control formControl" id="" placeholder="Enter Your Email "/>
           </div>
           <div className="formField">
              <label for="exampleFormControlInput1" class="formLabel"> Mobile</label>
              <input type="email" class="form-control formControl" id="" placeholder="Enter Your Mobile Number"/>
           </div>
             <div class="formField">
              <label for="exampleFormControlTextarea1" class="formLabel">Message</label>
              <textarea class="form-control formControlField" id="" rows="5"></textarea>
           </div>

           <div className='row buttonDiv'>
                <button>Submit</button>
             </div>

             </div>








         </div>


        </div>
      </div>
        </div>

   

        <div className="contactSectionThird">
        <div className="container mapContainer">
          <h4>Map</h4>
          <div className="mapDiv">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3503.4960716832193!2d77.31083587549908!3d28.584891275690822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM1JzA1LjYiTiA3N8KwMTgnNDguMyJF!5e0!3m2!1sen!2sin!4v1697535658689!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
        </div>


      


      <Footer />

      
    </section>
  )
}

export default Contact;
