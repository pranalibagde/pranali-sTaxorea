import React from 'react';
import './section3.css';
import selectIcon from '../images/selectIcon.png';
import documentVerificationIcon from '../images/documentVerificationIcon.png';
import uploadDocIcon from '../images/uploadDocIcon.png';
import doneIcon from '../images/doneIcon.png';
import assignSkillIcon from '../images/assignSkillIcon.png';
import Ellipse11 from '../images/Ellipse11.png';


const Section3 = () => {
  return (
    <>
     <section className="sectionThree">
      <div className="container sectionThreeContainer">
        <h1 className="sectionThreeFirstHeading">How It Work</h1>
        <p className='sectionThreePara'>Discover the Effortless 5 step Journey from Selection to 
           <br/> 
           Satisfaction with TaxOreo</p>

<div className='row justify-content-start CardFirstRow'>
  
  <div className="col card">  
  <div className="card-image">
    <div className="card-img"><img src={selectIcon} /></div>
    <h5 className="card-number">01</h5>
    <h6 className='card-heading'>Select Services & Fill Enquiry Form</h6>
    <p className='card-desc'>Click on the services you need – it's like online shopping for tax help!Fill out a simple form our executive will reach out to you promptly.</p>
  </div>
  </div>

  <div className="col card">  
  <div className="card-image">
  <div className="card-img"> <img src={uploadDocIcon} /> </div>
    <h5 className="card-number">02</h5>
    <h6 className='card-heading'>Share Info and Documents</h6>
    <p className='card-desc'>You'll get a call from a TaxOreo executive guiding you to upload necessary documents on our secure portal.</p>
  </div>
  </div>

  <div className="col card">  
  <div className="card-image">
  <div className="card-img"> <img src={documentVerificationIcon} /> </div>
    <h5 className="card-number">03</h5>
    <h6 className='card-heading'>Document Verification</h6>
    <p className='card-desc'>Our expert will look over your documents to make sure everything's in order. Once approved, we'll send you a link to make a secure payment.</p>
  </div>
  </div>

</div>


<div className='row cardSecondRow justify-content-center'>

  <div className="col-4 card">  
  <div className="card-image">
  <div className="card-img"><img src={assignSkillIcon} /> </div>
    <h5 className="card-number">04</h5>
    <h6 className='card-heading'>Assigning Skills & Track Progress</h6>
    <p className='card-desc'>Our system assigns a skilled professional to handle your specific order. Track the progress effortlessly through website, ensuring transparency at every stage.</p>
  </div>
  </div>

  <div className="col-4 card">  
  <div className="card-image">
  <div className="card-img"> <img src={doneIcon} /> </div>
    <h5 className="card-number">05</h5>
    <h6 className='card-heading'>Job Done!</h6>
    <p className='card-desc'>Once we finish your order, we'll send you a message to let you know. Your tax tasks are completed hassle-free!</p>
  </div>
  </div>


</div>



      </div>
      </section>

    
    </>
  )
}

export default Section3;
