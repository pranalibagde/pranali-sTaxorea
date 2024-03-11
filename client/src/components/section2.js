import React from 'react';
import './section2.css';
import { Link } from 'react-router-dom';
import registrationIcon from '../images/registrationIcon.png';
import gstReturnIcon from '../images/gstReturnIcon.png';
import auditIcon from '../images/auditIcon.png';
import panIcon from '../images/panIcon.png';                
import tdsFilingIcon from '../images/tdsFilingIcon.png';
import protaxIcon from '../images/protaxIcon.png';
import epfIcon from '../images/epfIcon.png';
import bookKeepingIcon from '../images/bookKeepingIcon.png';
import processingIcon from '../images/processingIcon.png';
import insuranceIcon from '../images/insuranceIcon.png';
import star from '../images/star.png';

const Section2 = () => {
  return (
    <section className="sectionTwo">
      <div className="container sectionTwoContainer">
        <h2 className='sectionTwoFirstHeading'>
          Our Offerings
        </h2>
        <p className="sectionTwoFirstPara">
          Discover the Effortless 5-step Journey from Selection to <br/> Satisfaction with TaxOreo
        </p>
            
            {/* first row */}
        <div className="row card-headings-row">
          <div className="col-6 d-flex align-items-center justify-content-start">
            <h5 className='card-headings-rowHead'>GST</h5>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-end">
            <p className="card-headings-rowPara">Know more</p>
          </div>
        </div>

        <div className='row cardsRow'>

<div className='col cardColumn '>
  <div className='rectangle-card '>
    <div className='row'>
      <div className='col-6 d-flex align-items-center justify-content-end'></div>
      <div className='col-6 d-flex align-items-center justify-content-end'></div>
    </div>
    <div className='row'>
      <div className='col'><img src={registrationIcon} alt="Registration Icon" /></div>
      <div className='col-md-auto'><h6>GST Registration</h6></div>
      <div className='col'></div>
      <div className='col'><p className='cardSecondPara'>₹500</p></div>
    </div>
  </div>
</div>

<div className='col cardColumn'>
  <div className='rectangle-card'>
    <div className='row'>
      <div className='col-6 d-flex align-items-center justify-content-end'>
        <img className='starImg' src={star} />
      </div>
      <div className='col-6 d-flex align-items-center justify-content-end'>
        <h6 className='percent'>60%</h6>
      </div>
    </div>
    <div className='row'>
      <div className='col'><img src={gstReturnIcon} alt="gstReturn Icon " /></div>
      <div className='col-md-auto'><h6>GST Return Filing</h6></div>
      <div className='col'><p className='cardFirstPara'>2000</p></div>
      <div className='col'><p className='cardSecondPara'>₹500</p></div>
    </div>
  </div>
</div>


<div className='col cardColumn'>
  <div className='rectangle-card'>
    <div className='row'>
      <div className='col-6 d-flex align-items-center justify-content-end'>
        <img className='starImg' src={star} />
      </div>
      <div className='col-6 d-flex align-items-center justify-content-end'>
        <h6 className='percent'>60%</h6>
      </div>
    </div>
    <div className='row'>
      <div className='col'><img src={auditIcon} alt="audit Icon" /></div>
      <div className='col-md-auto'><h6>Audit & Compliance</h6></div>
      <div className='col'><p className='cardFirstPara'>2000</p></div>
      <div className='col'><p className='cardSecondPara'>₹500</p></div>
    </div>
  </div>
</div>

</div>


       {/* second row */}

       <div className="row card-headings-row">
          <div className="col-6 d-flex align-items-center justify-content-start">
            <h5 className='card-headings-rowHead'>Income Tax</h5>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-end">
            <p className="card-headings-rowPara">Know more</p>
          </div>
        </div>

        <div className='row cardsRow'>

<div className='col cardColumn '>
  <div className='rectangle-card '>
    <div className='row'>
      <div className='col-6 d-flex align-items-center justify-content-end'><img className='starImg' src={star} /></div>
      <div className='col-6 d-flex align-items-center justify-content-end'>  <h6 className='percent'>60%</h6></div>
    </div>
    <div className='row'>
      <div className='col'><img src={panIcon} alt="pan Icon " /></div>
      <div className='col-md-auto'><h6>PAN/TAN Registration</h6></div>
      <div className='col'><p className='cardFirstPara'>2000</p></div>
      <div className='col'><p className='cardSecondPara'>₹500</p></div>
    </div>
  </div>
</div>

<div className='col cardColumn'>
  <div className='rectangle-card'>
    <div className='row'>
      <div className='col-6 d-flex align-items-center justify-content-end'>
        <img className='starImg' src={star} />
      </div>
      <div className='col-6 d-flex align-items-center justify-content-end'>
        <h6 className='percent'>60%</h6>
      </div>
    </div>
    <div className='row'>
      <div className='col'><img src={tdsFilingIcon} alt="tdsFiling Icon " /></div>
      <div className='col-md-auto'><h6>IT/TDS Return Filing </h6></div>
      <div className='col'><p className='cardFirstPara'>2000</p></div>
      <div className='col'><p className='cardSecondPara'>₹500</p></div>
    </div>
  </div>
</div>


<div className='col cardColumn'>
  <div className='rectangle-card'>
    <div className='row'>
      <div className='col-6 d-flex align-items-center justify-content-end'>
       
      </div>
      <div className='col-6 d-flex align-items-center justify-content-end'>
        
      </div>
    </div>
    <div className='row'>
      <div className='col'><img src={auditIcon} alt="audit Icon" /></div>
      <div className='col-md-auto'><h6>Audit & Compliance</h6></div>
      <div className='col'></div>
      <div className='col'><p className='cardSecondPara'>₹500</p></div>
    </div>
  </div>
</div>

</div>


            {/* third row */}
            <div className="row card-headings-row">
          <div className="col-6 d-flex align-items-center justify-content-start">
            <h5 className='card-headings-rowHead'>Payroll & Accounting</h5>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-end">
            <p className="card-headings-rowPara">Know more</p>
          </div>
        </div>

        <div className='row cardsRow'>

<div className='col cardColumn '>
  <div className='rectangle-card '>
    <div className='row'>
      <div className='col-6 d-flex align-items-center justify-content-end'><img className='starImg' src={star} /></div>
      <div className='col-6 d-flex align-items-center justify-content-end'>  <h6 className='percent'>60%</h6></div>
    </div>
    <div className='row'>
      <div className='col'><img src={protaxIcon} alt="protax Icon " /></div>
      <div className='col-md-auto'><h6>Profession Tax</h6></div>
      <div className='col'><p className='cardFirstPara'>2000</p></div>
      <div className='col'><p className='cardSecondPara'>₹500</p></div>
    </div>
  </div>
</div>

<div className='col cardColumn'>
  <div className='rectangle-card'>
    <div className='row'>
      <div className='col-6 d-flex align-items-center justify-content-end'>
     
      </div>
      <div className='col-6 d-flex align-items-center justify-content-end'>
     
      </div>
    </div>
    <div className='row'>
      <div className='col'><img src={epfIcon} alt="epf Icon" /></div>
      <div className='col-md-auto'><h6>EPF            </h6></div>
      <div className='col'></div>
      <div className='col'><p className='cardSecondPara'>₹500</p></div>
    </div>
  </div>
</div>


<div className='col cardColumn'>
  <div className='rectangle-card'>
    <div className='row'>
      <div className='col-6 d-flex align-items-center justify-content-end'>
       
      </div>
      <div className='col-6 d-flex align-items-center justify-content-end'>
        
      </div>
    </div>
    <div className='row'>
      <div className='col'><img src={insuranceIcon} alt="insurance Icon " /></div>
      <div className='col-md-auto'><h6>Employee State Insurance</h6></div>
      <div className='col'></div>
      <div className='col'><p className='cardSecondPara'>₹500</p></div>
    </div>
  </div>
</div>

</div>

                  {/* fourth row */}


 <div className='row cardsRow'>

<div className='col cardColumn '>
  <div className='rectangle-card '>
    <div className='row'>
      <div className='col-6 d-flex align-items-center justify-content-end'><img className='starImg' src={star} /></div>
      <div className='col-6 d-flex align-items-center justify-content-end'>  <h6 className='percent'>60%</h6></div>
    </div>
    <div className='row'>
      <div className='col'><img src={auditIcon} alt="audit Icon " /></div>
      <div className='col-md-auto'><h6>Audit & Compliance</h6></div>
      <div className='col'><p className='cardFirstPara'>2000</p></div>
      <div className='col'><p className='cardSecondPara'>₹500</p></div>
    </div>
  </div>
</div>

<div className='col cardColumn'>
  <div className='rectangle-card'>
    <div className='row'>
      <div className='col-6 d-flex align-items-center justify-content-end'>
     
      </div>
      <div className='col-6 d-flex align-items-center justify-content-end'>
     
      </div>
    </div>
    <div className='row'>
      <div className='col'><img src={bookKeepingIcon} alt="bookKeeping Icon " /></div>
      <div className='col-md-auto'><h6>Book-Keeping</h6></div>
      <div className='col'></div>
      <div className='col'><p className='cardSecondPara'>₹500</p></div>
    </div>
  </div>
</div>


<div className='col cardColumn'>
  <div className='rectangle-card'>
    <div className='row'>
      <div className='col-6 d-flex align-items-center justify-content-end'></div>
      <div className='col-6 d-flex align-items-center justify-content-end'></div>
    </div>
    <div className='row'>
      <div className='col'><img src={processingIcon} alt="processing Icon " /></div>
      <div className='col-md-auto'><h6>Data Processing </h6></div>
      <div className='col'></div>
      <div className='col'><p className='cardSecondPara'>₹500</p></div>
    </div>
  </div>
</div>

</div>


        <div className="sectionTwoButtonRow">
        <button className="EnquiryButton">
            Enquire Now
          </button>
        </div>
        
      </div>
    </section>
  );
}

export default Section2;

