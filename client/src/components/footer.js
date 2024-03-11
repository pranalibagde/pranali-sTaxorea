import React from 'react';                      
import './footer.css';

import logo from '../images/logo.png';
import Vector1 from '../images/Vector1.png';
import Vector from '../images/Vector.png';
import Vector2 from '../images/Vector2.png';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";


const Footer = () => {

    return (
        <>
         
          <section className='footerSection'>
          

          <div className="container upperc">
              <div className='row upperFooterRow'>

                <div className='col'>
                  <div className='row'>
                    <div className='col-3'>
                    <div className="footerVector1"><img src={Vector1} /></div>
                    </div>
                    <div className='col footerh5Col'>
                      <h5 className='footerh5'>Subscribe and get exclusive <br/> deals & offer</h5>
                    </div>
                  </div>
                  </div>

                  <div className='col'>
                    <div className='row'>
                      <div className='col'>
                        <div className='row'>
                          <div className='col-2 vectorImg'><img src={Vector} /></div>
                          <div className='col-10'><p>+91 8888883363</p></div>
                        </div>
                      </div>

                      <div className='col'>
                        <div className='row'>
                          <div className='col-2 vectorImg'><img src={Vector2} /></div>
                          <div className='col-10'><p>info@taxoreo.com</p></div>
                        </div>
                      </div>

                    </div>
                  </div>

              </div>
            </div>


            <div className="container footerContainer">
              <div className="row ">
                <div className="footerContent">
                  <div>
                  <navlink to='/' >
                    <img src={logo} alt="" />
                  </navlink>
                    <p>Book your trip in minute, get full <br/>Control for much longer.</p>
                    <div className='row'>
                    <div className='col socialImg'> <a href="https://www.facebook.com/"><FaFacebookF /></a> </div>                      
                    <div className='col socialImg'> <a href="https://www.instagram.com/"><FaInstagram /></a></div>
                    <div className='col socialImg'><a href="https://www.twitter.com/"><TiSocialTwitter /></a></div>

                    </div>
                  </div>
                  <ul></ul>
                  <ul><h3> Company</h3>
                    <li>
                    <a href="/aboutus">About</a>
                    </li>
                    <li>
                      <a href='/career'>Careers</a>
                    </li>
                    <li>
                      <a href='/#'>Logistic</a>
                    </li>
                    <li>
                      <a href='/#'>Privacy & Policy</a>
                    </li>
                  </ul>
                 
                  
                  <ul ><h3>Contact</h3>
                    <li>
                      <a href='/contact'>Help/FAQ</a>
                    </li>
                    <li>
                      <a href='/#'> Press</a>
                    </li>
                    <li>
                      <a href='/PrivacyPolicy'> Affilates</a>
                    </li>
                  </ul>
    
              
                  <ul ><h3>More</h3>
                    <li>
                      <a href='/#'>Press Centre</a>
                    </li>
                    <li>
                      <a href='/blogs'> Our Blog</a>
                    </li>
                    <li>
                      <a href ='/PrivacyPolicy'> Low fare tips</a>
                    </li>
                  </ul>
                </div>
                <hr style={{ color: '#666666' }} />

              </div>
            </div>
    
    <div className='container copyright-container'>
           <div className='row '>
            <div className='col-12 col-lg-6 d-flex justify-content-center flex-column align-items-start '>
              <p>Copyright, Trabook 2022. All rights reserved.</p>
            </div>
            <div className='col-12 col-lg-6 d-flex justify-content-center flex-column align-items-end '>
              <p>Terms & Conditions</p>
            </div>
           </div>
           </div>
           
          </section>
        </>
      )
    }
                    
export default Footer;




// import React from 'react';
// import './footer.css';
// import { NavLink } from 'react-router-dom';

// import logo from '../images/logo.png';
// import Vector1 from '../images/Vector1.png';
// import Vector from '../images/Vector.png';
// import Vector2 from '../images/Vector2.png';
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { TiSocialTwitter } from "react-icons/ti";

// const Footer = () => {
//   return (
//     <>
//       <section className='footerSection'>
//         <div className="container upperc">
//           <div className='row upperFooterRow'>
//             <div className='col'>
//               <div className='row'>
//                 <div className='col-3'>
//                   <div className="footerVector1"><img src={Vector1} alt="Vector1" /></div>
//                 </div>
//                 <div className='col footerh5Col'>
//                   <h5 className='footerh5'>Subscribe and get exclusive <br/> deals & offer</h5>
//                 </div>
//               </div>
//             </div>
//             <div className='col'>
//               <div className='row'>
//                 <div className='col'>
//                   <div className='row'>
//                     <div className='col-2 vectorImg'><img src={Vector} alt="Vector" /></div>
//                     <div className='col-10'><p>+91 8888883363</p></div>
//                   </div>
//                 </div>
//                 <div className='col'>
//                   <div className='row'>
//                     <div className='col-2 vectorImg'><img src={Vector2} alt="Vector2" /></div>
//                     <div className='col-10'><p>info@taxoreo.com</p></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="container footerContainer">
//           <div className="row">
//             <div className="footerContent">
//               <div>
//                 <NavLink to='/'>
//                   <img src={logo} alt="Logo" />
//                 </NavLink>
//                 <p>Book your trip in a minute, get full <br/>Control for much longer.</p>
//                 <div className='row'>
//                   <div className='col socialImg'><FaFacebookF /></div>
//                   <div className='col socialImg'><FaInstagram /></div>
//                   <div className='col socialImg'><TiSocialTwitter /></div>
//                 </div>
//               </div>
//               <ul></ul>
//               <ul><h3> Company</h3>
//                 <li>
//                   <NavLink to='/aboutus'>About</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to='/career'>Careers</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to='/'>Logistic</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to='/'>Privacy & Policy</NavLink>
//                 </li>
//               </ul>
//               <ul><h3>Contact</h3>
//                 <li>
//                   <NavLink to='/Terms'>Help/FAQ</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to='/'>Press</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to='/PrivacyPolicy'>Affiliates</NavLink>
//                 </li>
//               </ul>
//               <ul><h3>More</h3>
//                 <li>
//                   <NavLink to='/Terms'>Press Centre</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to='/blogs'>Our Blog</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to='/PrivacyPolicy'>Low fare tips</NavLink>
//                 </li>
//               </ul>
//             </div>
//             <hr style={{ color: '#666666' }} />
//           </div>
//         </div>
//         <div className='container copyright-container'>
//           <div className='row'>
//             <div className='col-12 col-lg-6 d-flex justify-content-center flex-column align-items-start'>
//               <p>Copyright, Trabook 2022. All rights reserved.</p>
//             </div>
//             <div className='col-12 col-lg-6 d-flex justify-content-center flex-column align-items-end'>
//               <p>Terms & Conditions</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Footer;
