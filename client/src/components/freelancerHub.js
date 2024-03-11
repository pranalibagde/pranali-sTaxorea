import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './freelancerHub.css';
import freelancer from '../images/freelancer.png';
import Frame14 from '../images/Frame14.png';
import selectIcon from '../images/selectIcon.png';
import Ellipse11 from '../images/Ellipse11.png';
import uploadDocIcon from '../images/uploadDocIcon.png';
import documentVerificationIcon from '../images/documentVerificationIcon.png';
import assignSkillIcon from '../images/assignSkillIcon.png';
import doneIcon from '../images/doneIcon.png';

const FreelancerHub = () => {
  return (
    <>
    <section className="FreelancerHubSection">
      
    <Navbar />


             <div className='freelanceFirst'>
               <img className="freelancerImg" src={freelancer} />
               <div className='freelanceFirstLeft'>
                <h1>Taxoreo <br/> Freelance Hub</h1>
                <h4> Elevate Your Accounting and Tax <br/> Freelance Career</h4>
                <button>Register Now</button>
               </div>
            </div> 


            <div className='freelanceSecond'>
              <h2>Taxoreo Freelancer Hub</h2>
              <p>Welcome to taxoreo your go-to platform for connecting skilled freelancers in the field of  Accounting 
                and Taxation Services with clients seeking expert assistance. Whether  you're a seasoned professional 
                or just starting your freelancing journey, our platform  provides you with opportunities to showcase 
                your expertise and grow your client base.</p>
                <button>Register Now</button>
            </div>

            <div className='freelanceThird'>
              <div className='container'>
              <div className='row'>
                <div className='col-6  freelanceThirdLeft'>
                  <img className='freelanceThirdLeftImg' src={Frame14} />
                </div>
                <div className='col-6  freelanceRight'>
                  <h1>Registration Criteria</h1>
                  <p>To join Taxoreo as a Freelancer in Accounting and Taxation Services, you need to meet the following criteria:</p>
                 
                  <div className='row'>
                    <div className='col-2'>
                      {/* <img className='Ellipse11Img' src={Ellipse11}/> */}
                      <img className='freelanceRightImg' src={selectIcon} />
                    </div>
                    <div className='col-10'>
                      <h4>Select Services</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et enim sed odio scelerisque pretium. 
                        Ut nunc nulla, ultricies eu nisl ac, sagittis</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-2'>
                      <img className='freelanceRightImg' src={uploadDocIcon} />
                    </div>
                    <div className='col-10'>
                      <h4> Upload Documents</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et enim sed odio scelerisque pretium. 
                        Ut nunc nulla, ultricies eu nisl ac, sagittis</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-2'>
                      <img className='freelanceRightImg' src={documentVerificationIcon} />
                    </div>
                    <div className='col-10'>
                      <h4> Document Verification</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et enim sed odio scelerisque pretium. 
                        Ut nunc nulla, ultricies eu nisl ac, sagittis</p>
                    </div>
                  </div>

                </div>
                </div>
              </div>
          </div>   




            <div className='freelanceFourth'>
              <div className='container freelanceFourthContainer'>
                <h3>Benefits</h3>
                <p>Discover the Effortless 5 step Journey from Selection to <br/> Satisfaction with TaxOreo</p>

                <div className='row justify-content-start FreelanceCardFirstRow'>
  <div className="col FreelanceCard">  
  <div className="FreelanceCard-image">
    <div className="FreelanceCard-img">
      <img src={selectIcon} /> 
          </div>
    <h5 className="FreelanceCard-number">01</h5>
    <h6 className='FreelanceCard-heading'>Access to a Global Network</h6>
    <p className='FreelanceCard-desc'>Join a platform with a diverse clientele from around the world, providing you with exposure to different industries and markets.</p>
  </div>
  </div>

  <div className="col FreelanceCard">  
  <div className="FreelanceCard-image">
    <div className="FreelanceCard-img"><img src={uploadDocIcon} /></div>
    <h5 className="FreelanceCard-number">02</h5>
    <h6 className='FreelanceCard-heading'>Flexible Work Schedule</h6>
    <p className='FreelanceCard-desc'>Set your own working hours and choose projects that align with your availability and preferences.</p>
  </div>
  </div>

  <div className="col FreelanceCard">  
  <div className="FreelanceCard-image">
    <div className="FreelanceCard-img"><img src={documentVerificationIcon} /></div>
    <h5 className="FreelanceCard-number">03</h5>
    <h6 className='FreelanceCard-heading'>Secure Payments</h6>
    <p className='FreelanceCard-desc'>Our platform ensures secure and timely payments for your services, providing financial stability and peace of mind.</p>
  </div>
  </div>

  </div>

  <div className='row justify-content-start FreelanceCardSecondRow'>

  <div className="col FreelanceCard">  
  <div className="FreelanceCard-image">
    <div className="FreelanceCard-img"><img src={assignSkillIcon} /> </div>
    <h5 className="FreelanceCard-number">04</h5>
    <h6 className='FreelanceCard-heading'>Professional Development</h6>
    <p className='FreelanceCard-desc'> Stay updated with the latest trends and regulations in the field through our resource center and community forums.</p>
  </div>
  </div>

  <div className="col FreelanceCard">  
  <div className="FreelanceCard-image">
    <div className="FreelanceCard-img"><img src={doneIcon} /></div>
    <h5 className="FreelanceCard-number">05</h5>
    <h6 className='FreelanceCard-heading'>Client Reviews and Ratings</h6>
    <p className='FreelanceCard-desc'>Build your reputation with client reviews and ratings, enhancing your profile and attracting more opportunities.</p>
  </div>
  </div>

  <div className="col FreelanceCard">  
  <div className="FreelanceCard-image">
    <div className="FreelanceCard-img"><img src={doneIcon} /></div>
    <h5 className="FreelanceCard-number">06</h5>
    <h6 className='FreelanceCard-heading'>Marketing Support</h6>
    <p className='FreelanceCard-desc'>Benefit from our platform's marketing efforts to showcase your skills and attract potential clients.</p>
  </div>
  </div>

  </div>


     </div>
    </div>

    <Footer/>

  

    </section>
    </>
  )
}

export default FreelancerHub;
