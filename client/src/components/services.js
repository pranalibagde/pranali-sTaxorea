import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './services.css';
import serviceFlowImg from '../images/serviceFlowImg.png';
import bookKeepingIcon from '../images/bookKeepingIcon.png';
import gstReturnIcon from '../images/gstReturnIcon.png';
import auditIcon from '../images/auditIcon.png';

const Services = () => {
    const [activeRow, setActiveRow] = useState(1);

  const handleRowClick = (rowNumber) => {
    setActiveRow(rowNumber);
  };

  return (
    <section className='serviceSection'>

        <Navbar/>

        <div className='serviceFirst'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 serviceFirstLeftCol'>
                        <h1 className='gstheading'>GST</h1>
                        <h4 className='gstheadingh4'> Home > <span className='gstheadingh4Span'>GST</span>  </h4>    
                    </div>
                    <div className='col-6 serviceFirstRightCol'><img src={serviceFlowImg} /></div>

                </div>
            </div>
        </div>

        <div className='serviceSecond'>
            <div className='container serviceSecondContainer'>
                <div className='row serviceSecondRow'>
                    
                    <div className='col-3 serviceSecondRowImgColLeft'>
                        <div
      className={`row serviceImgColRow  ${activeRow === 1 ? 'active' : ''}`}
      onClick={() => handleRowClick(1)}
    >
      <div className='col-3'><img src={bookKeepingIcon} alt="Icon" /></div>
      <div className='col-9'><h6>GST Registration</h6></div>
                      </div>


                      <div
                       className={`row serviceImgColRow ${activeRow === 2 ? 'active' : ''}`}
                       onClick={() => handleRowClick(2)}
                       >
                     <div className='col-3'><img src={gstReturnIcon} alt="Icon" /></div>
                     <div className='col-9'><h6>GST Return Filing</h6></div>
                </div>

                       <div
                       className={`row serviceImgColRow ${activeRow ===  3? 'active' : ''}`}
                       onClick={() => handleRowClick(3)}
                      >
                      <div className='col-3'><img src={auditIcon} alt="Icon" /></div>
                      <div className='col-9'><h6>Audit & Compliance</h6></div>
                </div>

                    </div>
                    
                    
                    
                    <div className='col-9 serviceSecondRowImgColRight'>
                        <div className='row'>
                            <div className='col-9'><h2>GST Registration</h2></div>
                            <div className='col-3'>
                                <div className='row'>
                                    <div className='col-6'><p className='col9FirstPara'>₹ <span>2000</span></p></div>
                                    <div className='col-6'><p className='col9SecondPara'>₹ 500/-</p></div>
                                </div>
                            </div>
                        </div>
                        <hr/>

                        <div className='quesAndAns'>
                            <p className='Questions'>Who is required to get GST registration in</p>
                            <p className='Answers'>GST is a product of the biggest tax reform in the country that has improved the ease of
                             doing business and also increased the taxpayer base. GST registration in Maharashtra has 
                             included thousands of small businesses under one uniform tax system. The introduction of GST 
                             in Maharashtra has reduced the tax complexities considerably. As the multiple tax systems 
                             are abolished and are subsumed under one single tax system under GST.</p>
                        </div>
                        <div className='quesAndAns'>
                            <p className='Questions'>Who is required to get GST registration in</p>
                            <p className='Answers'>GST is a product of the biggest tax reform in the country that has improved 
                            the ease of doing business and also increased the taxpayer base. GST registration in Maharashtra has 
                            included thousands of small businesses under one uniform tax system. The introduction of GST in Maharashtra
                            has reduced the tax complexities considerably. As the multiple tax systems are abolished and are 
                            subsumed under one single tax system under GST.</p>
                        </div>
                        <div className='quesAndAns'>
                            <p className='Questions'>Who is required to get GST registration in</p>
                            <p className='Answers'>GST is a product of the biggest tax reform in the country that has improved 
                            the ease of doing business and also increased the taxpayer base. GST registration in Maharashtra has 
                            included thousands of small businesses under one uniform tax system. The introduction of GST in Maharashtra
                            has reduced the tax complexities considerably. As the multiple tax systems are abolished and are 
                            subsumed under one single tax system under GST.</p>
                        </div>
                        <div className='quesAndAns'>
                            <p className='Questions'>Who is required to get GST registration in</p>
                            <p className='Answers'>GST is a product of the biggest tax reform in the country that has improved 
                            the ease of doing business and also increased the taxpayer base. GST registration in Maharashtra has 
                            included thousands of small businesses under one uniform tax system. The introduction of GST in Maharashtra
                            has reduced the tax complexities considerably. As the multiple tax systems are abolished and are 
                            subsumed under one single tax system under GST.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      

       <Footer/>

    </section>
  )
}

export default Services;


