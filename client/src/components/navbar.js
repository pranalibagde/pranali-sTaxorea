import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../images/logo.png';
import freelanceIcon from '../images/freelanceIcon.png';
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMailOpen } from "react-icons/hi";

const Navbar = () => {
  return (
    <div>

      <section className="NavUpperSection">
        <div className="container NavUpperSection-container">
          <div className='row'>
            <div className='col-6'></div>
            <div className='col-6 NavUpperSectionRightt'>
              <div className='row'>

              <div className='col NavUpperSectionLeftCall'>
                <div className='row'>
                  <div className='col-2 call justify-content-start'><LuPhoneCall /></div>
                  <div className='col-10 callNumber justify-content-end'><p>+91 8888883363</p></div>
                </div>
              </div>


              <div className='col NavUpperSectionLeftCall'>
                <div className='row'>
                  <div className='col-2 call'><HiOutlineMailOpen /></div>
                  <div className='col-10 callNumber'> <p>info@taxoreo.com</p> </div>
                </div>
              </div>

              <div className='col NavUpperSectionLeftCall'>
                <div className='row'>
                  <div className='col-2 call'><img src={freelanceIcon} /></div>
                  <div className='col-10 callNumber'>    <a href="/freelancerHub"><p>Freelancer Hub</p></a></div>
                </div>
              </div>              
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="Mainsectionofnavbar">
        <div className="container">
          <nav className="navbar navbar-expand-lg MainDivofnavbar">
            <div className="container-fluid">
              <Link to="/" className="nav-link">
                <div className="logo-mailkaro">
                  <img className="logo" src={logo} alt="" />
                </div>
              </Link>
              <button
                className="navbar-toggler"
                id="Divofcollapse"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon Divofcollapse"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 MainDivoflist">
                  <li className="nav-item">
                    <Link className="nav-link ListOfnavbar" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link ListOfnavbar" to="/aboutus">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link ListOfnavbar" to="/offerings">
                      Offerings
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link ListOfnavbar" to="/blogs">
                      Blogs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link ListOfnavbar" to="/contact">
                      Contact
                    </Link>
                  </li>
                  <div className='nav-btn-row'>
                  <li className="nav-item">
                    <Link className="btn enquiry-btn" to="/enquiry">
                      Enquire Now
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="btn login-btn" to="/login">
                      Login 
                    </Link>
                  </li>
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
