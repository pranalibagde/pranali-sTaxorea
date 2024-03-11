import React from 'react';
import Footer from './footer';
import Navbar from './navbar';
import booksImg from '../images/booksImg.png';
import Frame15 from '../images/Frame15.png';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import './aboutus.css';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import imgItem1 from '../images/imgItem1.png';


const Aboutus = () => {
  return (
    <section className='aboutusSection'>

        <Navbar/>
      
    <div className='aboutusSectionFirst'>
        <div className='container'>
            <div className='row aboutusFirstRow d-flex'>
                <div className='col-6 aboutusFirstColLeft'>
                    <h1>About Us</h1>
                    <h4>Elevate Your Accounting and Tax <br/> Freelance Career</h4>
                </div>
                <div className='col-6 aboutusFirstColRight'><img src={booksImg} /></div>
            </div>
        </div>
        </div>  

    <div className='aboutusSectionSecond'>
        <div className='container'>
            <div className='row aboutusSecondRow'>
                <div className='col-6 aboutusSecondRowLeft'><img src={Frame15} /></div>
                <div className='col-6 aboutusSecondRowRight'>
                    <h2>About Taxoreo</h2>
                    <h5>Welcome to taxoreo your go-to platform for connecting skilled freelancers in.</h5>
                    <p>Welcome to taxoreo your go-to platform for connecting skilled freelancers in the field of 
                       Accounting and Taxation Services with clients seeking expert assistance. Whether you're a 
                       seasoned professional or just starting your freelancing journey, our platform provides you 
                       with opportunities to showcase your expertise and grow your client base.</p>

                       <div className='row twentyKRow'>
                        <div className='col twentyKRowCol'>
                            <h4>20+</h4>
                            <p>Years of experience</p>
                        </div>
                        <div className='col twentyKRowCol'>
                            <h4>20K+</h4>
                            <p>GST registration</p>
                        </div>
                        <div className='col twentyKRowCol'>
                            <h4>20K+</h4>
                            <p>GST registration</p>
                        </div>
                       </div>
                </div>
            </div>
        </div>
        </div>    


    <div className='aboutusSectionThird'>
        <div className='container'>
            <div className='row aboutThirdRow'>
                <div className='col-4 aboutThirdRowLeft'><h4>Meet Our Team</h4></div>
                <div className='col-8 aboutThirdRowRight'>
                    <h6>Discover the Effortless 5 step Journey from Selection to <br/> Satisfaction with TaxOreo</h6>
                </div>
            </div>

            <div className='row aboutThirdRowBelow'>

                <div className='col-4 aboutRowBelowCol'>
                    <img src={image1} />
                    <h5>Andrew Taggart</h5>
                    <h6>Co-founder</h6>
                </div>
                <div className='col-4 aboutRowBelowCol'>
                    <img src={image2} />
                    <h5>Andrew Taggart</h5>
                    <h6>Co-founder</h6>
                </div>
                <div className='col-4 aboutRowBelowCol'>
                    <img src={image3} />
                    <h5>Andrew Taggart</h5>
                    <h6>Co-founder</h6>
                </div>

            </div>
        </div>
    </div>

    <section className="sectionFourSecond">
        <div className='container sectionFourSecond-container'>
            <div className="row sectionFourSecondRow">
                <div className='col-4 sectionFourSecondCol'>
                    <h2 className="sectionFourThirdHeading">
                    What people say <span>about Us.</span>
                    </h2>
                    <p className='sectionFourSecondPara'>
                    Our Clients send us bunch of smilies with our services and we love them.
                    </p>
                </div>

            <div className='col-8 sectionFourCarousel'>
                <div className=' row carouselItem'>
           <div className='carouselDiv'>
        <div className='row carouselUpperRow'>
            <div className='col-3'><img src={imgItem1} /></div>
            <div className='col-9 justify-content-start'>
                <h5>Esther Hills</h5>
                <h6>Lead Intranet Technician</h6>
            </div>
        </div>
        <div className='row carousellowerRow'>
            <p>Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. 
                Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore 
                illo accusantium est et voluptatem voluptas.</p>
        </div>
    </div>
    </div>      
     
    <div className='row carouselBtnRow'>
    <button className="carousel-control-prev circular-btn"><FaArrowLeft /></button>
    <button className="carousel-control-next circular-btn"><FaArrowRight /></button>
</div>
              
            </div>

            </div>
        </div>
     </section>

    <Footer/>

    </section>
  )
}

export default Aboutus;
